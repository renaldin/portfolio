// import { GetServerSidePropsContext, GetStaticPathsContext } from "next"
import { services } from "../data"
import ServiceCard from "../components/ServiceCard"
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from "../animations"

const index = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        I am a Software Engineer. I have 1 year 7 months of professional work experience as a Backend Developer. I am also a Freelance Web Developer with 4 years 3 months experience. The number of projects from clients that I have worked on is around 25 projects. For more details about me, visit my Linkedin.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 flex-grow dark:bg-dark-100" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What can I do</h6>
        <motion.div variants={stagger} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-6">
          {
            services.map((service, index) => (
              <motion.div variants={fadeInUp} className="col-span-2 p-2 md:col-span-1 bg-gray-200 rounded-lg dark:bg-dark-200" key={index}>
                <ServiceCard service={service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
      <div className="p-4 mt-5 bg-gray-400 flex-grow dark:bg-dark-100" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">Education</h6>
        <motion.div variants={stagger} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-6">
          <div>
              <h5 className="my-2 text-xl font-bold">Information Systems</h5>
              <p className="font-semibold">Politeknik Negeri Subang (2020-2023)</p>
              <p className="mt-3">
                  - Grade: 3.90/4.00
              </p>
              <p className="mt-3">
                  - 1st Winner Outstanding Student. Issued by Politeknik Negeri Subang · Apr 2022
              </p>
              <p className="">
                  - 1st Winner Outstanding Student. Issued by Jurusan Manajemen Informatika Politeknik Negeri Subang · Mar 2022
              </p>
              <p className="mb-3">
                  - Creation of a Uang Kuliah Tunggal (UKT) website project for Politeknik Negeri Subang · Jan - Mar 2023
              </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }

// export const getStaticProps = async (context: GetStaticPathsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }
