const Jobdetails = require('../models/details');

const getJobdetails = async (req, res) => {
    try{
        const jobdetails = await Jobdetails.find();

        
        res.json(jobdetails);

    }
    catch(error){
        res.status(500).json({message: error.message});
    };
}

const seedJobdetails = async (req, res) => {

    const sampleJobdetails = {
        title:"Job Title",
        postJoburl: "Software",
        datePost: "https://www.google.com",

        dateInNum: "22/December/2024",


        LocationJoburl:"job-location-url",


        NameLocation: "Location",

        Location: "New York",


        SalaryJoburl: "https://www.google.com",


        OfferSalary: "offer salary",

         InHandSalary: "60k 80k week",

        ClockJoburl: "https://www.google.com",

        ExparitionData:"Expiration date",

        ExpData: "22/December/2024",



        ExprinceJoburl: "https://www.google.com",
        exprience:"exprience",
        UserExprinice: "5 Years",


        indrustryJoburl: "https://www.google.com",
        NameIndrustry:"Indrustry",
        Indrustry: "Software",


        quelificationJoburl: "https://www.google.com",
        Quelfication: "Quelfication",
        Quelified: "bacholor",




        careerLevelUrl: "https://www.google.com",
        careerPath:"Career Level",
        career: "Software",


        jonDescription:"Job Description",

        jobdetailsDetails:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",

        
        responbilities:"Responbilities",
        responsiblityPath:
        
        "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing Work with BAs, product managers and tech teams to lead the Product Design Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications. Accurately estimate design tickets during planning sessions. Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries. Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions. Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel",

        skills:"Skill & Experience",
        skillsPath:" 1: You have at least 3 years’ experience working as a Product Designer in a fast-paced environment. 2: You have experience working with design systems and component libraries 3: You have experience working with design systems and component libraries 4: You have experience working with design systems and component libraries 5: You have experience working with design systems and component libraries 6: You have experience working with design systems and component libraries 7: You have experience working with design systems and component libraries 8: You have experience working with design systems and component libraries 9: You have experience working with design systems and component libraries 10: You have experience working with design systems and component libraries 11: You have experience working with design systems and component libraries 1",
       

    };

    try {
        const jobdetails = new Jobdetails(sampleJobdetails);
        await jobdetails.save();
        res.status(201).json({ message: "Sample jobdetails created", jobdetails });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getJobdetails, seedJobdetails };
