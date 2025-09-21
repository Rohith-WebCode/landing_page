import { useMediaQuery } from 'react-responsive'
import { featureLists, goodLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Art = () => {
const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(()=>{
        const start = isMobile ? "top 20%":"top top";
    
        const masckTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:"#art",
                start,
                end:'bottom center',
                scrub:1.5,
                pin:true
            }
        })

        masckTimeline
        .to('.will-fade',{opacity:0,stagger:0.2,ease:'power1.inOut'})
        .to('.masked-img',{scale:1.3,maskPosition:'center',maskSize:'400%',duration:1,ease:'power1.inOut'})
        .to('#masked-content',{opacity:1,duration:1,ease:'power1.inOut'})
    })

  return (
   <div id="art">
	 <div className="container mx-auto h-full pt-20">
		<h2 className="will-fade">The ART</h2>
		
		<div className="content">
		 <ul className="space-y-4 will-fade">
			{goodLists.map((feature, index) => (
			 <li key={index} className="flex items-center gap-2">
				<img src="/images/check.png" alt="check" />
				<p>{feature}</p>
			 </li>
			))}
		 </ul>
		 
		 <div className="cocktail-img">
			<img
				src="/images/under-img.jpg"
				alt="cocktail"
				className="abs-center masked-img size-full object-contain"
                
			/>
		 </div>
		 
		 <ul className="space-y-4 will-fade">
			{featureLists.map((feature, index) => (
			 <li key={index} className="flex items-center justify-start gap-2">
				<img src="/images/check.png" alt="check" />
				<p className="md:w-fit w-60">{feature}</p>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="masked-container">
		 <h2 className='will-fade text-4xl md:text-5xl font-modern-negra text-center md:pt-5 text-white mt-60 absolute top-20 md:top-[50%] md:-translate-y-1/2 left-1/2 -translate-x-1/2 '>Sip-Worthy Perfection</h2>
		 <div id="masked-content">
			<h3>Made with Craft, Poured with Passion</h3>
			<p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
            <img src='/images/drink4.png' className='absolute  -bottom-25 -left-14 md:-top-120 md:-left-70 rotate-12 pointer-events-none w-[112px] h-[120px] md:w-[210px] md:h-[225px]'/>
            <img src='/images/cup-2.png' className='absolute -bottom-25 -right-14 md:bottom-0 md:-right-70 pointer-events-none  w-[112px] h-[120px] md:w-[210px] md:h-[225px]'/>
		 </div>
		</div>
	 </div>
	</div>
  )
}

export default Art