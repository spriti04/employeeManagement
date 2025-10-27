import './home.css';
export default function Home() {
    return (
        <div className="body-card" style={{ textAlign: 'center' }}>
            <h1>Home Page</h1>
            <div className="container">
                <div className="inner-contain1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZVcwP2WEOTshBb8BLZ0Yd2HKmrSjdt8Row&s"
                        alt="" style={{ width: '326px', height: '230px' }} />
                </div>
                <div className="inner-contain2">
                    <p style={{ paddingTop: '35px' }}>
                        <span>Our company culture is built on respect, inclusivity, and growth. </span>
                        <span>We celebrate diversity and believe that great ideas come from different perspectives. </span>
                        <span>Management supports open communication and recognizes employee contributions, fostering a sense of belonging and motivation.</span>
                        <span>Beyond work, we host team outings, celebrations, and wellness programs to strengthen bonds and maintain a cheerful, supportive atmosphere.</span>
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="inner-contain2">
                    <p style={{ paddingTop: '35px' }}>
                        <span>We constantly encourage innovation and continuous learning. </span>
                        <span>The company regularly organizes technical workshops, hackathons, and knowledge-sharing sessions to keep the team updated with the latest technologies. </span>
                        <span>Employees are free to experiment with new frameworks, explore creative solutions, and contribute ideas that can shape future products. </span>
                        <span>Our belief is simple — innovation thrives where curiosity and learning never stop.</span>
                    </p>
                </div>
                <div className="inner-contain1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXhesgT90lKHr3DqpeWvPecTUYG20DckIcw&s"
                        alt="" style={{ width: '326px', height: '230px' }} />
                </div>
            </div>

            <div className="container">
                <div className="inner-contain1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34A0hrCCbzSiR4zUa7TUiToN7SogZPHRFUw&s"
                        alt="" style={{ width: '326px', height: '230px' }} />
                </div>
                <div className="inner-contain2">
                    <p style={{ paddingTop: '35px' }}>
                        <span>Teamwork is at the heart of everything we do. </span>
                        <span>Every project begins with brainstorming sessions where developers, designers, and testers share ideas freely. </span>
                        <span>We follow agile practices to ensure smooth communication and continuous improvement throughout the development cycle. </span>
                        <span>Each team member brings unique strengths to the table, and together, we solve complex problems efficiently. </span>
                        <span>Collaboration tools like Slack, Jira, and GitHub keep everyone connected and transparent in their work progress.</span>
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="inner-contain2">
                    <p style={{ paddingTop: '35px' }}>
                        <span>At our company, we believe in creating a positive and motivating work environment where every team member feels valued.</span>
                        <span>The office is designed to inspire creativity and collaboration — from open discussion zones to quiet corners for focused work. </span>
                        <span>We encourage flexibility and trust our employees to manage their time effectively, whether they’re working on-site or remotely. </span>
                        <span>This balance allows everyone to perform at their best while maintaining a healthy work-life harmony.</span>
                    </p>
                </div>
                <div className="inner-contain1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtph_rpf9bnMQneVWq1_zZPsf8S6uyVp8VQ&s"
                        alt="" style={{ width: '326px', height: '230px' }} />
                </div>
            </div>

            <footer id="fixed-footer">
                {/* <h2>Contact</h2> */}
                <p>&copy; 2025 Your Website</p>
            </footer>
        </div>
    )
}