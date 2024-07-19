import React from 'react'

const BestCompanies = () => {
  const data = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0ve7GXj96ZxGaBMuZsfOvVi3IxnGDxUPW4HR8JDzN2qGciUEch',
      title: 'Stack',
      jobs: '172 Jobs',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png',
      title: 'Google',
      jobs: '168 Jobs',
    },
    {
      image:
        'https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-256.png',
      title: 'Apple',
      jobs: '158 Jobs',
    },
    {
      image:
        'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/78-microsoft-256.png',
      title: 'Microsoft',
      jobs: '148 Jobs',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png',
      title: 'Linkedin',
      jobs: '138 Jobs',
    },
    {
      image:
        'https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Behance-64.png',
      title: 'Behance',
      jobs: '128 Jobs',
    },
    {
      image:
        'https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/dribble-256.png',
      title: 'Dribble',
      jobs: '118 Jobs',
    },
    {
      image:
        'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/webflow-icon.png',
      title: 'Webflow',
      jobs: '108 Jobs',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06mmpvlWzKZcJqj0i6a9lGU21lwosqkSzhA&s',
      title: 'Wix',
      jobs: '100 Jobs',
    },
    {
      image:
        'https://static-00.iconduck.com/assets.00/upwork-icon-512x512-myk0wgad.png',
      title: 'Upwork',
      jobs: '96 Jobs',
    },
    {
      image:
        'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/174_Intercom_logo_logos-256.png',
      title: 'Intercom',
      jobs: '48 Jobs',
    },
    {
      image: 'https://cdn.worldvectorlogo.com/logos/uihut-4.svg',
      title: 'UIHUT',
      jobs: '6 Jobs',
    },
  ]

  return (
    <div className='overflow-x-hidden z-0 relative w-full min-h-screen flex items-center justify-center mb-10'>
      <div className='hero-container relative w-[95%] max-w-5xl mx-auto flex flex-col items-center justify-center pt-24 pb-2'>
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold text-center mb-6 md:mb-8 lg:mb-10'>
          The Fast Track to your <br /> next job
        </h1>

        <h5 className='text-[#8c8d96] text-center text-base md:text-lg lg:text-xl mb-8 md:mb-10 lg:mb-16'>
          We ensure your next step is a step forward. That's why we built a jobs{' '}
          <br />
          marketplace that serves all kinds of professionals first.
        </h5>

        <div className='w-full h-full flex flex-wrap items-center justify-center gap-5 mb-10'>
          {data.map((item, index) => (
            <div
              key={index}
              className='w-[240px] h-[100px] bg-white border group border-gray-200 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 transform hover:scale-105 cursor-pointer '
            >
              <div className='w-full h-full bg-white border group-hover:border-black absolute z-10 border-gray-200 rounded-lg shadow-md p-4 flex items-center  space-x-4 transition-all duration-300 transform group-hover:scale-100 cursor-pointer'>
                <img
                  src={item.image}
                  alt={`${item.title} Logo`}
                  className='h-12 w-12 rounded-lg'
                />
                <div className='flex-1'>
                  <h2 className='text-lg md:text-xl font-semibold'>
                    {item.title}
                  </h2>
                  <p className='text-sm md:text-base text-gray-500'>
                    {item.jobs}
                  </p>
                </div>
                <div className='bg-transparent group-hover:bg-[#5d5bff] border-2 text-black group-hover:text-white duration-50  rounded-full p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3 w-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z'
                    />
                  </svg>
                </div>
              </div>

              <div className='w-full h-full  bg-black rounded-md absolute bottom-[-6px] right-[-6px] opacity-0 z-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-50'></div>
            </div>
          ))}
        </div>

        <div className='w-40 relative h-14 flex group'>
          <button className='w-full p-2 h-full rounded-lg border-2 text-xl text-white bg-[#5d5bff] z-10 border-black delay-100'>
            Browse All
          </button>
          <div className='w-full h-full z-0 bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50'></div>
        </div>
      </div>
    </div>
  )
}

export default BestCompanies
