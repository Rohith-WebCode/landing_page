import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'


const About = () => {

    useGSAP(()=>{
        const titleSplit = SplitText.create('#about h2',{
            type:"words"
        })

        const subTitileSplit = SplitText.create(".sub-content span",{
            type:"words"
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:"#about",
                start:'top center'
            }
        })
        
        scrollTimeline
        .from(titleSplit.words,{
            opacity:0,duration:1,yPercent:100,ease:'expo.out',stagger:0.02
        })
        // .from(subTitileSplit.words,{
        //     opacity:0,duration:1,yPercent:100,ease:'back.out',stagger:0.02
        // },'-=0.1')
        .from('.top-grid, .bottom-grid',{
             opacity:0,duration:1,ease:'power1.inOut',stagger:0.04
        },'-=0.5')
    })

  return (
    <div id='about'>
        <div className='mb-16'>
            <div className='content'>
                <div className='md:col-span-8'>
                    <p className='badge'>Best Cocktails</p>
                    <h2>
                        Where every detail matters <span className='text-white'> - </span>
                        from muddle to garnish
                    </h2>
                </div>

                <div className='sub-content'>
                    <p>
                        Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. 
                        That care is what turns a simple drink into something truly memorable.
                    </p>
                    <div>
                        <div className='flex flex-col items-start'> 
                            <div className='flex -space-x-2'>
                                <img src='/images/star.png'/>
                                <img src='/images/star.png'/>
                                <img src='/images/star.png'/>
                                <img src='/images/star.png'/>
                                <img src='/images/star.png'/>
                            </div>   
                        <p className='md:text-3xl text-xl font-bold'>
                            4.5/5
                        </p>
                        <p className='text-sm text-white-100'>More than +12000 customers</p>
                        </div>

                
                 <div className="h-20 w-0.5 bg-[#565656] relative">
                <div className="absolute inset-0 bg-[url('/images/noise.png')]"></div>
                 </div>

                <div className='relative bg-gradient w-[180px] h-[70px] lg:w-[196px] 2xl:h-[85px] flex justify-center items-center rounded-[60px]'>
                    <div className="absolute inset-0 bg-[url('/images/noise.png')]  mix-blend-overlay"></div>
                    <div className='flex -space-x-9 md:-space-x-6 2xl::-space-x-4'>
                    <img src='/images/profile1.png' alt='grid-imag-1' className='w-[44px] h-[44px] rounded-full border-3 '/>
                    <img src='/images/profile2.png' alt='grid-imag-1' className='w-[44px] h-[44px] rounded-full border-3 '/>
                    <img src='/images/profile3.png' alt='grid-imag-1' className='w-[44px] h-[44px] rounded-full border-3 '/>
                    <img src='/images/profile4.png' alt='grid-imag-1' className='w-[44px] h-[44px] rounded-full border-3 '/>   
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='top-grid'>
            <div className='md:col-span-3'>
                <div className='noisy'/>
                <img src='/images/abt1.png' alt='grid-imag-1'/>
            </div>

            <div className='md:col-span-3'>
             <div className='relative bg-gradient w-full h-full flex md:justify-center text-start md:text-center rounded-3xl'>
                    <div className="absolute inset-0 bg-[url('/images/noise.png')]  mix-blend-overlay"></div>
                    <div className='flex flex-col p-8 w-full'>
                        <h2 className='text-2xl md:text-4xl font-modern-negra'>Crafted to Impress</h2>
                           <div className="h-0.5 w-full bg-[#565656] relative mb-4">
                            <div className="absolute inset-0 bg-[url('/images/noise.png')]"></div>
                            </div>

                            <div className='flex flex-col gap-4'>
                            <div className='flex gap-3 items-center'>
                                <img src='/images/check.png' className='w-[16px] h-[16px]'/>
                                <p>Perfectly balanced blends</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src='/images/check.png' className='w-[16px] h-[16px]'/>
                                <p>Garnished to perfection</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src='/images/check.png' className='w-[16px] h-[16px]'/>
                                <p>Ice-cold every time</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src='/images/check.png' className='w-[16px] h-[16px]'/>
                                <p>Expertly shaken & stirred</p>
                            </div>
                            </div>


                    </div>
                </div>
            </div>

            <div className='md:col-span-6'>
                <div className='noisy'/>
                <img src='/images/abt2.png' alt='grid-imag-2'/>
            </div>

        </div>

            <div className='bottom-grid'>

                <div className='md:col-span-8'>
                <div className='noisy'/>
                <img src='/images/abt3.png' alt='grid-imag-3'/>
               </div>

                <div className='md:col-span-4'>
                <div className='noisy'/>
                <img src='/images/abt4.png' alt='grid-imag-4'/>
               </div>

            </div>

        
    </div>
  )
}

export default About