import colorSharp from "../assets/img/color-sharp.png";
import "./Profiles.css";
import leetcode from "../assets/img/profiles/Leetcode.png";
import gfg from "../assets/img/profiles/gfg.png";

export const Profiles = () => {
    return (
        <section className="profiles-section" id="profiles">
            <img className="profiles-bg" src={colorSharp} alt="Background" />
            <h1>MY CODING PROFILES</h1>
            <div className="profiles-container">
                {/* LeetCode Card */}
                <a href="https://leetcode.com/u/siddhantchauhan/" className="profile-link" target="_blank">
                    <div className="profile-box">
                        <img className="profile-image" src={leetcode} alt="LeetCode" />
                        <h4>LeetCode</h4>
                    </div>
                </a>
                {/* GitHub Card */}
                <a href="https://github.com/SiddhantChauhan1" className="profile-link" target="_blank">
                    <div className="profile-box">
                        <img className="profile-image" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                        <h4>GitHub</h4>
                    </div>
                </a>
                {/* GeeksForGeeks Card */}
                <a href="https://www.geeksforgeeks.org/user/siddhantchhi8e/" className="profile-link" target="_blank">
                    <div className="profile-box">
                        <img className="profile-image" src={gfg} alt="GeeksForGeeks" />
                        <h4>GeeksForGeeks</h4>
                    </div>
                </a>

            </div>
        </section>

    );
};

