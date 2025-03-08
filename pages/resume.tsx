import Bar from "../components/Bar"
import { languages, tools } from "../data"
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from "../animations"

const resume = () => {

    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-6 py-2">
            <h5 className="my-3 text-2xl font-bold">Experience</h5>

            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <div>
                        <h5 className="my-2 text-xl font-bold">Backend Developer</h5>
                        <p className="font-semibold">PT. Inovasi Kesehatan Indonesia (Kesia) (September 2023 - March 2025)</p>
                        <p className="my-3">
                            This is my experience working at <a href="https://www.kesia.id/" className="text-green" target="__blank">Kesia.id</a> and being assigned as a Backend Developer. Kesia.id is a hospital management information system.
                        </p>
                        <p className="my-3">
                            Skills: Node Js, Express Js, Go, PostgreSQL, N8N, Git, Scrum
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <div>
                        <h5 className="my-2 text-xl font-bold">Frontend Developer</h5>
                        <p className="font-semibold">PT. Inovasi Kesehatan Indonesia (Kesia) (October 2022 - January 2023)</p>
                        <p className="my-3">
                            This is my internship experience at <a href="https://www.kesia.id/" className="text-green" target="__blank">Kesia.id</a> and was assigned as a Frontend Developer. Kesia.id is a hospital management information system.
                        </p>
                        <p className="my-3">
                            Skills: React Js, Ant Design, Axios, Git, Scrum
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <div>
                        <h5 className="my-2 text-xl font-bold">Web Developer</h5>
                        <p className="font-semibold">Jokian.ku Freelance (2021 - Present)</p>
                        <p className="my-3">
                            This is my freelance experience at <a href="https://jokiankuu.github.io/" className="text-green" target="__blank">Jokian.ku</a> and was assigned as a Fullstack Developer and Owner. Jokian.ku is a website creation service provider.
                        </p>
                        <p className="my-3">
                            Skills: Laravel, Livewire, Codeigniter, Tailwind, Bootstrap, HTML, CSS Git
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* langauges & tools */}

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map((language) => <Bar data={language} key={language.name} />)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">
                        {
                            tools.map((tool) => <Bar data={tool} key={tool.name} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume
