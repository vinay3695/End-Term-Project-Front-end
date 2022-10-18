import home from '../../assets/photos/purple-planet-dark-background-saturn-astronomy-4042x2274-6425.jpg'

const Contact = () => {
    return (
        <section className="flex-1 bg-gray-300">
            <h1 className="pt-8 px-12 md:px-16 lg:px-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-700 transition-[font-size] duration-1000">we live</h1>
            <h1 className="pb-8 px-12 md:px-16 lg:px-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-700 transition-[font-size] duration-1000">not very far</h1>
            <div className="py-8 px-12 md:px-16 lg:px-20">
                <div style={{position: 'relative', textAlign:'right', width: '100%', height: 'min-content'}}>
                    <div style={{overflow: 'hidden', background: 'none !important', width: '100%', height: 'min-content'}}>
                        <iframe
                            title="ourCurrentOffice"
                            className="min-h-[20rem] h-[20rem] md:h-[30rem] lg:h-[40rem] rounded-lg transition-[height] duration-1000"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=manhattan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                        <a className="hidden" href="https://receivesms.one">receivesms</a>
                    </div>
                </div>
            </div>
            <h1 className="my-12 pb-8 px-12 md:px-16 lg:px-20 text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-wide text-zinc-700 transition-[font-size] duration-1000">
                if you want to chat on high speed internet but if you want to <span className="font-[GT] text-g-blue text-g">meet us</span> then...
            </h1>
            <div className="hidden w-full h-[80rem]" style={{background: "linear-gradient(180deg, rgb(209 213 219), #000)"}}>
                <div className="hidden m-auto h-[90%] w-[1px] bg-violet-500"></div>
            </div>
            <div className="py-20 px-12 md:px-16 lg:px-20 w-full bg-black">
                <img className="mx-auto w-full" alt="ourActualLocation" src={home} />
            </div>
        </section>
    );
};

export default Contact;