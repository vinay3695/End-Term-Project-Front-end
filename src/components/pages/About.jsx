const About = () => {
    return (
        <section className="flex-1 bg-gray-300">
            <h1 className="py-8 px-12 md:px-16 lg:px-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-700 transition-[font-size] duration-1000">we are a dream company</h1>
            <p className="my-4 px-12 md:px-16 lg:px-20 w-full max-w-4xl text-xl text-stone-800 text-justify">
                There was an idea to bring together a remarkable group of people.
                People with exceptional skills and unparalleled talents.
                People with vision beyond any single greatest mind of history.
                Combined together these eccentric individuals can potentially create an entire universe or so we thought.
                But they didn't...
            </p>
            <div className="my-12 px-12 md:px-16 lg:px-20 text-7xl animate-heading-text">Instead</div>
            {/*<div className="flex justify-center my-10">*/}
            {/*    <button onClick={scrollToTheContent} className="flex justify-center items-center rounded-full p-1 hover:text-gray-200 hover:bg-g-green hover:shadow-[3px_3px_0_0_black] transition-all duration-1000">*/}
            {/*        <span className="material-symbols-rounded text-6xl">arrow_downward</span>*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div className="hidden w-full min-screen h-[40rem]" style={{background: "linear-gradient(180deg, rgb(209 213 219), #000)"}}></div>
            <div className="bg-black">
                <h1 className="py-8 px-12 md:px-16 lg:px-20 text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-200 transition-[font-size] duration-1000">they created a miracle</h1>
                <p className="py-8 px-12 md:px-16 lg:px-20 w-full max-w-4xl text-xl text-stone-200 text-justify">
                    They created a way to <span className="font-[GT] font-black underline">create universes</span> with human vision and imagination.
                    And were able to give it any shape they wanted.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 md:px-16 lg:px-20 w-full">
                    <img className="rounded-lg" alt="universe-1" src="https://time.com/wp-content/uploads/2017/10/229-westerlund-21.jpg?w=2000" />
                    <div className="h-full min-h-[16rem] sm:min-h-[20rem] md:min-h-min w-full rounded-lg bg-center bg-cover bg-[url('https://d2pn8kiwq2w21t.cloudfront.net/original_images/main_image_star-forming_region_carina_nircam_final-5mb.jpg')]"></div>
                    <img className="rounded-lg" alt="universe-2" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZn0EO.img?w=768&h=707&m=6" />
                    <div className="h-full min-h-[16rem] sm:min-h-[20rem] md:min-h-min w-full rounded-lg bg-center bg-cover bg-[url('https://scx2.b-cdn.net/gfx/news/hires/2022/webb-telescope-capture-1.jpg')]"></div>
                    <img className="rounded-lg" alt="universe-2" src="http://cdn.eso.org/images/screen/eso0421a.jpg" />
                    <div className="h-full min-h-[16rem] sm:min-h-[20rem] md:min-h-min w-full rounded-lg bg-center bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/1200px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg')]"></div>
                    <img className="rounded-lg" alt="universe-2" src="https://t4.ftcdn.net/jpg/03/07/66/53/360_F_307665321_4ihhoMjc2jaH3KNxobF6iTpXNk076Hz0.jpg" />
                    <div className="h-full min-h-[16rem] sm:min-h-[20rem] md:min-h-min w-full rounded-lg bg-center bg-cover bg-[url('https://i.insider.com/599708a746a54c1947587b3d?width=1000&format=jpeg&auto=webp')]"></div>

                </div>
                <p className="py-8 px-12 md:px-16 lg:px-20 w-full max-w-4xl text-xl text-stone-200 text-justify">
                    Holy grail... I know, absolutely <a rel="noreferrer" target="_blank" href="https://translate.google.co.in/?sl=fr&tl=en&text=putan%20de&op=translate" className="font-[GT] underline" lang="french">putain de</a> amazing... I know.
                </p>
            </div>
        </section>
    );
};

export default About;