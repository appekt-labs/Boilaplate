import React from 'react'
import Feature from './Feature'

import { FaUserShield, FaMobileAlt, FaServer, FaCodeBranch, FaRocket, FaLayerGroup } from 'react-icons/fa';

function Features() {
    const features:{title:string,description:string, icon:React.JSX.Element}[] = [
        {
          title: "User Authentication",
          description: "Secure login and registration system with JWT support for session management.",
          icon: <FaUserShield />
        },
        {
          title: "Responsive Design",
          description: "Optimized layout for mobile, tablet, and desktop devices to enhance user experience.",
          icon: <FaMobileAlt />
        },
        {
          title: "API Integration",
          description: "Seamless integration with external APIs to fetch and display data dynamically.",
          icon: <FaServer />
        },
        {
          title: "State Management",
          description: "Efficient state management using Redux or Context API to handle complex application state.",
          icon: <FaCodeBranch />
        },
        {
          title: "Server-Side Rendering",
          description: "Improved performance and SEO with server-side rendering for faster page loads.",
          icon: <FaRocket />
        },
        {
          title: "Component Library",
          description: "Reusable and customizable UI components to speed up development and ensure consistency.",
          icon: <FaLayerGroup />
        }
      ];
      
  return (
    <section className=" text-slate-900 body-font" id='features'>
      <div className="container my-12 mx-auto">
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div className="text-center flex flex-col gap-2 md:gap-4 lg:gap-5">
            <h1 className=" font-semibold text-2xl mb-2 sm:mb-0">Features</h1>
            <p className=" leading-relaxed text-base sm:pl-10 pl-0 mb-3 opacity-80">Our Next.js boilerplate comes packed with a suite of powerful features designed to accelerate your development process and enhance your application's performance. Here's what you can expect:</p>
          </div>
          
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {
            features.map((feature, idx)=>{
                return (
                    <Feature key={idx} title={feature.title} description={feature.description} icon={feature.icon} />
                )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Features