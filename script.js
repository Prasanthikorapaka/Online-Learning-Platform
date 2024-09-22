const moduleList = {
    "Java": ["Basics"],
    "Python": ["Introduction"],
    "Machine Learning": ["Introduction"],
    "PHP": ["Basics"],
    "PL/SQL": ["Basics"],
    "HTML": ["Introduction"],
    "R Language": ["Introduction"],
    "C++": ["Basics"],
    "Data Structures": ["Introduction"],
};

function showModules(course) {
    const modules = moduleList[course] || [];
    let moduleContent = `<h2>${course} Modules</h2><ul>`;
    
    if (modules.length === 0) {
        moduleContent += `<p>No modules available for this course.</p>`;
    } else {
        modules.forEach(module => {
            moduleContent += `<li><a href="moduleDetails.html?course=${encodeURIComponent(course)}&module=${encodeURIComponent(module)}">${module}</a></li>`;
        });
    }
    
    moduleContent += `</ul>`;
    document.getElementById('moduleContent').innerHTML = moduleContent;
}
