const moduleDetails = {
    "Java - Basics": {
        name: "Java Introduction",
        description: "An introduction to Java programming, covering syntax, data types, and control structures. Java is a versatile, high-level programming language widely used for building enterprise-level applications.",
        objectives: ["Understand Java syntax", "Learn about variables", "Implement control structures"],
        resources: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/java/" },
            { name: "W3Schools", url: "https://www.w3schools.com/java/" },
            { name: "JavaTpoint", url: "https://www.javatpoint.com/java-tutorial" }
        ],
        videos: [
            "https://www.youtube.com/embed/eIrMbAQSU34"
        ]
    },
    "Python - Introduction": {
        name: "Python Introduction",
        description: "An introduction to Python programming, covering syntax and basic operations. Python is known for its readability and simplicity, making it an excellent choice for beginners and professionals alike.",
        objectives: ["Understand Python syntax", "Learn about data types", "Write basic Python scripts"],
        resources: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/python-programming-language/" },
            { name: "W3Schools", url: "https://www.w3schools.com/python/" },
            { name: "JavaTpoint", url: "https://www.javatpoint.com/python-tutorial" }
        ],
        videos: [
            "https://www.youtube.com/embed/kqtD5dpn9C8"
        ]
    },
    "Machine Learning - Introduction": {
        name: "Machine Learning Introduction",
        description: "An overview of machine learning concepts, types, and applications. Machine learning is a subset of artificial intelligence that focuses on building systems that learn from data.",
        objectives: ["Understand machine learning basics", "Learn about supervised and unsupervised learning"],
        resources: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/machine-learning/" },
            { name: "W3Schools", url: "https://www.w3schools.com/ai/ai_machine_learning.asp" },
            { name: "JavaTpoint", url: "https://www.javatpoint.com/machine-learning" }
        ],
        videos: [
            "https://www.youtube.com/embed/i_LwzRVP7bg"
        ]
    },
    "PHP - Basics": {
        name: "PHP Introduction",
        description: "An introduction to PHP programming, covering syntax, variables, and functions. PHP is a popular server-side scripting language used for web development.",
        objectives: ["Understand PHP syntax", "Learn about variables and data types"],
        resources: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/php/" },
            { name: "W3Schools", url: "https://www.w3schools.com/php/" },
            { name: "JavaTpoint", url: "https://www.javatpoint.com/php-tutorial" }
        ],
        videos: [
            "https://www.youtube.com/embed/6EukZDFE_Zg"
        ]
    },
    "PL/SQL - Basics": {
        name: "PL/SQL Introduction",
        description: "Introduction to PL/SQL, covering its syntax and basic programming constructs. PL/SQL is Oracle's procedural language extension to SQL.",
        objectives: ["Understand PL/SQL basics", "Learn about procedures and functions"],
        resources: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/pl-sql-tutorial/" },
            { name: "W3Schools", url: "https://www.w3schools.com/sql/sql_intro.asp" },
            { name: "JavaTpoint", url: "https://www.javatpoint.com/pl-sql-tutorial" }
        ],
        videos: [
            "https://www.youtube.com/embed/CIvTM9eLv-s"
        ]
    },
    "HTML - Introduction": {
        name: "HTML Introduction",
        description: "An introduction to HTML, covering its structure and basic elements. HTML is the standard markup language for creating web pages.",
        objectives: ["Understand HTML syntax", "Learn about tags and attributes"],
        resources: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/html-tutorials/" },
            { name: "W3Schools", url: "https://www.w3schools.com/html/" },
            { name: "JavaTpoint", url: "https://www.javatpoint.com/html-tutorial" }
        ],
        videos: [
            "https://www.youtube.com/embed/qz0aGYrrlhU"
        ]
    },
    "R Language - Introduction": {
        name: "R Language Introduction",
        description: "An introduction to R programming, covering syntax and basic operations. R is widely used for statistical computing and data analysis.",
        objectives: ["Understand R syntax", "Learn about data types and functions"],
        resources: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/r-programming-language/" },
            { name: "W3Schools", url: "https://www.w3schools.com/r/" },
            { name: "JavaTpoint", url: "https://www.javatpoint.com/r-tutorial" }
        ],
        videos: [
            "https://www.youtube.com/embed/_V8eKsto3Ug"
        ]
    },
    "C++ - Basics": {
        name: "C++ Introduction",
        description: "An introduction to C++ programming, covering syntax and object-oriented concepts. C++ is an extension of C that includes object-oriented features.",
        objectives: ["Understand C++ syntax", "Learn about classes and objects"],
        resources: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/c-plus-plus/" },
            { name: "W3Schools", url: "https://www.w3schools.com/cpp/" },
            { name: "JavaTpoint", url: "https://www.javatpoint.com/cpp-tutorial" }
        ],
        videos: [
            "https://www.youtube.com/embed/ZzaPdXTrSb8"
        ]
    },
    "Data Structures - Introduction": {
        name: "Data Structures Introduction",
        description: "An overview of data structures, covering types and basic operations. Data structures are essential for organizing and managing data efficiently.",
        objectives: ["Understand data structure concepts", "Learn about arrays and linked lists"],
        resources: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/data-structures/" },
            { name: "W3Schools", url: "https://www.w3schools.com/dsa/dsa_intro.php" },
            { name: "JavaTpoint", url: "https://www.javatpoint.com/data-structure-tutorial" }
        ],
        videos: [
            "https://www.youtube.com/embed/BBpAmxU_NQo"
        ]
    }
};

// Function to display module details
function displayModuleDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseName = urlParams.get('course');
    const moduleName = urlParams.get('module');

    const moduleInfo = moduleDetails[`${courseName} - ${moduleName}`];

    const detailsContent = document.getElementById('detailsContent');

    if (moduleInfo) {
        let content = `<h2>${moduleInfo.name}</h2>`;
        content += `<p><strong>Description:</strong> ${moduleInfo.description}</p>`;
        content += `<p><strong>Learning Objectives:</strong> ${moduleInfo.objectives.join(', ')}</p>`;
        content += `<p><strong>Additional Resources:</strong></p>`;
        content += `<ul>`;
        moduleInfo.resources.forEach(res => {
            content += `<li><a href="${res.url}" target="_blank">${res.name}</a></li>`;
        });
        content += `</ul>`;
        content += `<p><strong>Video Lectures:</strong></p>`;
        moduleInfo.videos.forEach(video => {
            content += `<iframe width="500" height="300" src="${video}" frameborder="0" allowfullscreen></iframe>`;
        });

        detailsContent.innerHTML = content;
    } else {
        detailsContent.innerHTML = `<p>Module details not found.</p>`;
    }
}

// Call the function to display module details on page load
window.onload = displayModuleDetails;
