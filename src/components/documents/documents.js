import './documents.css';

//Images of Documents
import ResumeImg from '../../assets/Resume.jpg';
import CoverLetterImg from '../../assets/CoverLetter.jpg';
//import Placeholder from '../../assets/Placeholder.png'

//Documents
import Resume from '../../assets/ResumePDF.pdf';
import CoverLetter from '../../assets/CoverLetterPDF.pdf'




function Documents() {
    const documents = [
    { title: 'Resume', link: Resume, img: ResumeImg},
    { title: 'Cover Letter', link: CoverLetter, img:CoverLetterImg}
    ]
       

    return (
        <>
            <div id='documents'>
                <h2>DOCUMENTS</h2>
                <div className='card-container'>
                    {documents.map(document => (
                        <div className='card'>
                            <img class="card-image" src={document.img} alt={document.img} />
                            <a href={document.link}>
                            <h3>{document.title}</h3></a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Documents;