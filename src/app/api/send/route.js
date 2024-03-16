import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const from_email = process.env.FROM_EMAIL;
const to_local_email = process.env.TO_LOCAL_EMAIL;
const audience_api_key = process.env.AUDIENCE_API_KEY;


export async function POST(req) {
    let body = await req.json();
    const { name, surname, email, subject, message } = body
    try {
        const send_to_user_data = await resend.emails.send({
            from: from_email,
            to: email,
            subject: "Potwierdzenie wysłania wiadomości / Confirmation of message sending",
            react: (
                <>
                    <p>Cześć, </p>

                    <p>Bardzo mi miło, że się ze mną kontaktujesz!

                    Naprawdę doceniam, że znalazłeś/aś chwilę, żeby się ze mną skontaktować.
                    Odpiszę tak szybko, jak tylko będę miał możliwość.</p>

                    <p>Pozdrawiam serdecznie</p>
                    <p>Artur Gęsiarz.</p>

                    <p>-----------English below-----------</p>

                    <p>Hi, </p>.

                    <p>I am very pleased that you are contacting me!

                        I really appreciate you taking the time to contact me.
                        I will write back as soon as I have the opportunity.</p>.

                    <p>Greetings</p>.
                    <p>Artur Gęsiarz.</p>.
                </>
            ),
        });

        const send_to_me_data = await resend.emails.send({
            from: from_email,
            to: to_local_email,
            subject: subject,
            react: (
                <>
                    <p>Wiadomosc:</p>
                    <p>{message}</p>

                    <p>Nadawca:</p>
                    <p>{name} {surname}</p>
                    <p>{email}</p>
                </>
            ),
        });

        const save_user_data = await resend.contacts.create({
            email: email,
            firstName: name,
            lastName: surname,
            unsubscribed: false,
            audienceId: audience_api_key
        })

        return Response.json([send_to_user_data, send_to_me_data, save_user_data]);

    } catch (error) {
        return Response.json({error});
    }
}