import React from 'react'

const ActivitySection = () => {
  return (
    <section className="flex flex-wrap justify-between items-center container mx-auto mt-10 pb-6 px-6 sm:px-10 lg:px-30 gap-y-6">
  <div className="flex items-center justify-center gap-6">
    <h3 className="font-semibold text-2xl sm:text-3xl lg:text-[">3800+</h3>
    <h4 style={{
              background: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }} className="font-normal text-base sm:text-lg lg:text-lg">USER ACTIVE</h4>
  </div>
    <div className='hidden sm:block text-white/60'>|</div>
  <div className="flex items-center justify-center gap-6">
    <h3 className="font-semibold text-2xl sm:text-3xl lg:text-[">230+</h3>
    <h4 style={{
              background: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }} className="font-normal text-base sm:text-lg lg:text-lg">TRUSTED BY COMPANY</h4>
  </div>
    <div className='hidden sm:block text-white/60'>|</div>
  <div className="flex items-center justify-center gap-6">
    <h3 className="font-semibold text-2xl sm:text-3xl lg:text-[">$230M+</h3>
    <h4 style={{
              background: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}  className="font-normal text-base sm:text-lg lg:text-lg">TRANSACTION</h4>
  </div>
</section>

  )}
export default ActivitySection