import React from 'react'
import SectionTitle from './SectionTitle'

export default function Experience() {
  return (
    <section id='experience' className="max-w-contentContainer mx-auto py-10 lgl:py-18">
      <SectionTitle title='Experience' />
      <div className='container relative mx-auto px-6 flex flex-col space-y-8'>
        {/* Center line */}
        <div className='absolute w-2 z-0 h-full bg-timelineColor shadow-md left-[68px] inset-0 mdl:mx-auto mdl:right-0 mdl:left-0'>

        </div>
        {/* Timeline Element */}
        <div className='relative z-10'>
          <img src="/assets/avetti.jpeg" alt="Avetti Commerce" className='rounded-full w-24 h-24 object-cover mb-1 sml:absolute mdl:mx-auto mdl:left-0 mdl:right-0' />
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
                <li>Designed and developed a composable e-commerce web application, utilizing microservices to optimize performance and improve scalability</li>
                <li>
                  Developed and documented REST and GraphQL APIs ensuring server-side validation for long-term maintainability and enhanced reliability
                </li>
                <li>
                  Conducted testing using <span className='text-textGreen'>JUnit</span> and <span className='text-textGreen'>Mockito</span> to ensure that the code was bug-free and met all project requirements, ensuring a high-quality product for the company.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='relative z-10'>
          <img src="/assets/humber.webp" alt="Humber College" className='rounded-full w-24 h-24 object-cover  mb-1  sml:absolute mdl:mx-auto mdl:left-0 mdl:right-0' />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maxime sunt saepe eius quibusdam quam nesciunt impedit eos, mollitia excepturi soluta quasi facere.
              </p>
            </div>
          </div>
        </div>
        <div className='relative z-10'>
          <img src="/assets/ptu.png" alt="Avetti Commerce" className='w-24 h-24 object-cover sml:absolute mb-1 mdl:mx-auto mdl:left-0 mdl:right-0' />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maxime sunt saepe eius quibusdam quam nesciunt impedit eos, mollitia excepturi soluta quasi facere.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}
