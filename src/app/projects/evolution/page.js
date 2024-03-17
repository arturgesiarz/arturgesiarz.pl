import ProjectNavbar from "@/app/components/ProjectNavbar";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <ProjectNavbar name={"Evolution Project"}/>
            <div className="flex grid justify-center align-middle py-60">
                <h2 className="text-4xl font-bold text-white mb-4">Evolution Project</h2>
                <video controls width="1500" height="300" >
                    <source src="/videos/evolution/extened_map.mp4" type="video/mp4" />
                </video>
                <br/>
                <h2 className="text-3xl font-bold text-white mb-4">Introduction to the project</h2>
                <p className="text-white text-base md:text-2xl">
                    <p>
                        This animal evolution simulation was written as part of a project for a credit in the course 'Object Oriented Programming' and was created in a team of two.
                    </p>
                    <p>
                        This simulation is dedicated to the evolution of animals defined by a mass of parameters.
                    </p>
                    <br/>
                    <p>
                        The first group of parameters is map properties, which describes the height, width and mode of our map:
                    </p>
                    <br/>
                    <p>
                        <li>Map width</li>
                        <li>Map height</li>
                        <li>Map mode Basic/Extended</li>
                    </p>
                    <br/>
                    <p>
                        The second group of enegry properties is responsible for all the energy we deal with on this map:

                    </p>
                    <br/>

                    <li>Grass energy profit</li>
                    <li>Start animal energy</li>
                    <li>Minimum energy for copulation</li>
                    <li>Copulation cost</li>
                    <br/>
                    <p>
                        The third group is spawning properties it is responsible for the starting elements on the map such as:
                    </p>
                    <br/>
                   <li>Start plants</li>
                    <li>New plants per day</li>
                    <li>Start animals</li>
                    <li>Mimum mutations change</li>
                    <li>Maximum mutations changes</li>
                    <li>Length genome</li>
                    <li>Mutation mode Basic/Extended</li>
                    <br/>
                </p>
            </div>
            <Footer/>
        </main>
    );
}