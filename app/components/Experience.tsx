import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

export default function Experience() {
  return (
    <section id='experience' className="max-w-contentContainer mx-auto py-10 lgl:py-18 flex flex-col gap-4">
      <SectionTitle title='Experience' />
      <div className='container relative mx-auto px-6 flex flex-col space-y-8'>
        {/* Center line */}
        <div className='absolute w-2 z-0 h-full bg-timelineColor shadow-md left-[68px] inset-0 mdl:mx-auto mdl:right-0 mdl:left-0'>

        </div>
        {/* Timeline Element */}
        <div className='relative z-10'>
          <Image
            src="/assets/avetti.jpeg" alt="Avetti Commerce" className='rounded-full w-24 h-24 object-cover mb-1 sml:absolute mdl:mx-auto mdl:left-0 mdl:right-0'
            width={200}
            height={200}
          ></Image>
          <div className='timeline-container text-textDark'>
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className='p-6 bg-timelineColor rounded-md shadow-md border-2 border-textGreen'>
              <div className='flex justify-between flex-wrap'>
                <h4 className='tracking-wide font-semibold text-sm sml:text-md'>Software Developer Intern
                </h4>
                <span className='text-sm sml:text-md'>Jan 2023 - April 2023</span>
              </div>
              <h6 className='italic pb-3 text-sm sml:text-md tracking-wide'>Avetti Commerce, Barrie, ON</h6>
              <div className='flex flex-wrap gap-x-4 gap-y-2 mb-3'>
                <span className='skill-pill'>Java</span>
                <span className='skill-pill'>Springboot</span>
                <span className='skill-pill'>Microservices</span>
                <span className='skill-pill'>Reactjs</span>
                <span className='skill-pill'>MySQL</span>
                <span className='skill-pill'>GraphQL</span>
                <span className='skill-pill'>AWS</span>
              </div>
              <ul className='list-disc pl-6 text-sm'>
                <li>Developed a high-performance e-commerce web application using microservices architecture, resulting in a remarkable 30% improvement in response time</li>
                <li>Collaborated with UX/UI team and stakeholders to optimize the user interface, delivering a seamless shopping experience</li>
                <li>
                  Implemented robust <span className='text-textGreen'>REST</span> and <span className='text-textGreen'>GraphQL APIs</span>  with server-side validation, improving data integrity and system stability</li>
                <li>
                  Conducted comprehensive testing using <span className='text-textGreen'>JUnit</span> and <span className='text-textGreen'>Mockito</span>, ensuring a bug-free application and minimizing post-production defects
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='relative z-10'>
          <Image
            src="/assets/humber.webp" alt="Humber College" className='rounded-full w-24 h-24 object-cover  mb-1  sml:absolute mdl:mx-auto mdl:left-0 mdl:right-0'
            width={200}
            height={200}
          ></Image>
          <div className='timeline-container timeline-container-left'>
            <div className="timeline-pointer timeline-pointer-left" aria-hidden="true"></div>
            <div className='p-6 bg-timelineColor rounded-md shadow-md border-2 border-textGreen'>
              <div className='flex justify-between text-textDark flex-wrap'>
                <h4 className='tracking-wide font-semibold text-sm sml:text-md'>I.T. Solutions
                </h4>
                <span className='text-sm sml:text-md'>Sep 2021 - April 2023</span>
              </div>
              <h6 className='italic pb-3 text-sm sml:text-md tracking-wide text-textDark'>Humber College, Toronto, ON</h6>
              <p className='text-textDark text-sm'>
                Throughout this program, I gained valuable knowledge and hands-on experience in various technologies related to web development. I explored various technolgies including React, Java, Springboot, enabling me to build robust and dynamic web applications. Additionally, I had the opportunity to collaborate on both group and individual projects, further enhancing my problem-solving skills and fostering my ability to work effectively in a team environment
              </p>
            </div>
          </div>
        </div>
        <div className='relative z-10'>
          <Image
            src="/assets/ptu.png" alt="Avetti Commerce" className='w-24 h-24 object-cover sml:absolute mb-1 mdl:mx-auto mdl:left-0 mdl:right-0'
            width={200}
            height={200}
          >
          </Image>
          <div className='timeline-container'>
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className='p-6 bg-timelineColor rounded-md shadow-md border-2 border-textGreen'>
              <div className='flex justify-between text-textDark  flex-wrap'>
                <h4 className='tracking-wide font-semibold text-sm sml:text-md'>B.Tech Electronics
                </h4>
                <span className='text-sm sml:text-md'>Jul 2016 - Jul 2020</span>
              </div>
              <h6 className='italic pb-3 text-sm sml:text-md tracking-wide text-textDark'>PTU University, India </h6>
              <p className='text-textDark text-sm'>
                I hold a Bachelor&apos;s degree in Electronics and Communication Engineering, which provided me with a comprehensive understanding of electronics and communication systems. Through this program, I sharpened my analytical skills and developed strong problem-solving abilities, enabling me to tackle complex challenges effectively
              </p>
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}
