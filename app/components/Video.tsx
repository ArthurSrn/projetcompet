import React from "react";

const SectionWithBackground: React.FC = () => {
    return (
        <article className="h-screen relative">



            <div className="absolute inset-1 flex justify-center items-center">
                <video
                    className="w-3/4 h-auto"
                    src="Explainer.mp4"
                    controls
                ></video>
            </div>
        </article>

    );
};

export default SectionWithBackground;