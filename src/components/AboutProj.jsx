// AboutProj.js
import React from 'react';

 const AboutProj = ({ abouts,}) => {
    // console.log(live);
    return (
        abouts &&
        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">About the Project</h3>
                <p className="py-4">{abouts}</p>
                <div className="modal-action">
                    <button className="btn">Close</button>

                    {/* <a href={abouts.live}><button className="btn">Live</button></a> */}
                </div>
            </form>
        </dialog>
    );
};

export default AboutProj;
