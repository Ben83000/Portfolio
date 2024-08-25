import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from "./particles.config";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBackground = () => {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particlesConfig}
            className="absolute top-0 left-0 w-full h-full -z-50"
        />

)
    ;
};

export default ParticlesBackground