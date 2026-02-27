let currentSpread = 0;
const totalSpreads = 4;


//  PAGE CONTENT — each page is an HTML string

function coverLeftHTML() {
    return `
    <div style="
        height: 100%;
        background: linear-gradient(160deg, #3aafa9, #5b8fd4, #7b5ea7);
        display: flex;
        align-items: center;
        justify-content: center;
    ">
        <div style="
            color: rgba(255,255,255,0.25);
            font-family: 'Playfair Display', serif;
            font-size: 0.8rem;
            font-style: italic;
            letter-spacing: 0.3rem;
            writing-mode: vertical-rl;
            text-orientation: mixed;
        ">Batoul Abed El Sater · 2026</div>
    </div>`;
}

function coverRightHTML() {
    return `
    <div class="cover-page" style="background: linear-gradient(160deg,#3aafa9,#5b8fd4,#7b5ea7);">
        <div class="inner-border">
            <span class="star">✦</span>
            <div class="big-name">Batoul</div>
            <div class="rule"></div>
            <div class="sub">Frontend Developer<br>&amp; Author</div>
            <div class="rule"></div>
            <div class="sub" style="font-size:0.75rem; opacity:0.8;">Turn the page to begin ›</div>
            <span class="star">✦</span>
        </div>
    </div>`;
}

function page0HTML() {
    return `
    <div class="page-content">
        <div class="profile-wrap">

            <img src="photoes/profile_photo.jpeg" alt="Batoul"
                 onerror="this.src='https://placehold.co/110x110/7b5ea7/fff?text=B'">

            <h1>Batoul Ahmad Abed El Sater</h1>
            <h3>Frontend Developer & Author</h3>

            <div class="badges">
                <span>📚 Published Author</span>
                <span>💻 CS Year 3</span>
                <span>🎨 Frontend Dev</span>
            </div>

            <div style="
                border-left: 3px solid #7b5ea7;
                padding: 0.7rem 1rem;
                margin: 0.4rem 0;
                background: rgba(123,94,167,0.05);
                border-radius: 0 6px 6px 0;
            ">
                <p style="font-size:0.82rem; line-height:1.8; color:#5a4a3a; font-style:italic;">
                    I am a third-year Computer Science student who loves building clean, creative websites.
                    I also wrote a book — because to me, coding and writing are the same:
                    both tell stories that matter.
                </p>
            </div>


            <a href="#" onclick="goTo(6);return false;" class="btn" style="width:100%; justify-content:center; gap:0.5rem; margin-top:0.4rem; background:#7b5ea7; border-color:#7b5ea7 !important;">
                <i class='bx bxs-envelope'></i> Contact Me
            </a>

        </div>
        <div class="pg-number">— 1 —</div>
    </div>`;
}

// Experience
function page1HTML() { 
    return `
    <div class="page-content">
        <div class="chapter-label">Chapter I</div>
        <h1 class="page-title">Work Experience</h1>
        <div class="title-line"></div>
        <div class="timeline">
            <div class="tl-item">
                <span class="tl-dot"></span>
                <span class="tl-year">2026 — Present</span>
                <h3>Frontend Developer Intern</h3>
                <p>Building responsive pages with HTML, CSS and JavaScript. Working with Git as part of a real development team.</p>
            </div>
            <div class="tl-item">
                <span class="tl-dot"></span>
                <span class="tl-year">2025</span>
                <h3>Attending Workshops in the University</h3>
                <p>Attending workshops in the university to enhance my skills and knowledge in various fields and take as much as I can knowledge.</p>
            </div>
            <div class="tl-item">
                <span class="tl-dot"></span>
                <span class="tl-year">2024</span>
                <h3>Author</h3>
                <p>Wrote and published my first book. Taught me discipline and the courage to share my voice.</p>
            </div>
        </div>
        <div class="pg-number">— 2 —</div>
    </div>`;
}

// Education
function page2HTML() { 
    return `
    <div class="page-content">
        <div class="chapter-label">Chapter II</div>
        <h1 class="page-title">Education</h1>
        <div class="title-line"></div>
        <div class="timeline">
            <div class="tl-item">
                <span class="tl-dot"></span>
                <span class="tl-year">2026 — Present</span>
                <h3>BSc Computer Science — Year 3</h3>
                <p>Studying AI, Accounting, web development and software Architecture.</p>
            </div>
            <div class="tl-item">
                <span class="tl-dot"></span>
                <span class="tl-year">2025 — 2026</span>
                <h3>Computer Science — Year 2</h3>
                <p>Learning Data Structures , Data Base , Networks , Algorithms , Operating System...</p>
            </div>
            <div class="tl-item">
                <span class="tl-dot"></span>
                <span class="tl-year">2024 — 2025</span>
                <h3>Graduation from school _ Life Sciences</h3>
                <p>I graduated from school with honors and received a grade of 18. I had a passion for writing poetry and contemplation , and when I entered computer science , I explored many shared worlds: something that involuntary led me to philosophy and which guided me in the future to write my first book.</p>
            </div>
        </div>
        <div class="pg-number">— 3 —</div>
    </div>`;
}

// Writing
function page3HTML() { 
    return `
    <div class="page-content">
        <div class="chapter-label">Chapter III</div>
        <h1 class="page-title">My Writing</h1>
        <div class="title-line"></div>
        <div class="writing-wrap">
            <div class="book-float"><i class='bx bxs-book-heart'></i></div>
            <p class="big-quote">"Words are my first language."</p>
            <p class="writing-desc">Before writing code, I wrote books.I love philosophy so i write a philosophic book.If you you want to read the book ; download it.</p>
            <div class="book-card">
                <i class='bx bxs-book-open'></i>
                <div>
                    <h3>My Published Book</h3>
                    <p>A collection of philosophical and contemplative ideas from the heart. Every page carries a piece of who I am.</p>
                    <a href="book.pdf" class="btn">Read the Book</a>
                </div>
            </div>
        </div>
        <div class="pg-number">— 4 —</div>
    </div>`;
}

// Skills
function page4HTML() { 
    return `
    <div class="page-content">
        <div class="chapter-label">Chapter IV</div>
        <h1 class="page-title">My Skills</h1>
        <div class="title-line"></div>
        <div class="skill-group">
            <h3>Frontend</h3>
            <div class="skill-tags">
                <span><i class='bx bxl-html5'></i>HTML</span>
                <span><i class='bx bxl-css3'></i>CSS</span>
                <span><i class='bx bxl-javascript'></i>JS</span>
                <span><i class='bx bxl-react'></i>React</span>
                <span><i class='bx bxl-tailwind-css'></i>Tailwind</span>
            </div>
        </div>
        <div class="skill-group">
            <h3>Backend</h3>
            <div class="skill-tags">
                <span><i class="fa-brands fa-laravel"></i>Laravel</span>
                <span><i class='bx bxl-python'></i>Python</span>
                <span><i class='bx bxl-java'></i>Java</span>
                <span><i class='bx bxl-git'></i>Git</span>
                <span><i class='bx bxl-github'></i>GitHub</span>
            </div>
        </div>
        
        <div class="pg-number">— 5 —</div>
    </div>`;
}

// Projects
function page5HTML() { 
    return `
    <div class="page-content">
        <div class="chapter-label">Chapter V</div>
        <h1 class="page-title">Latest Project</h1>
        <div class="title-line"></div>
        <div class="project-img">
            <img src="photoes/photo.avif" alt="Project"
                 onerror="this.parentElement.style.background='linear-gradient(135deg,#2ec4c4,#7b5ea7)'">
        </div>
        <div class="project-title-row">
            <h3>EventFlow_Event Planning Platform</h3>
            <a href="https://github.com/Batoul-AbedElSater/eventflow-capstone" target="_blank">Live <i class='bx bx-link-external'></i></a>
        </div>
        <p class="tech">HTML · CSS · JavaScript . Laravel</p>
        <p class="project-desc">EventFlow is a comprehensive event planning platform that streamlines the process of organizing events from start to finish. It allows users to create, manage, and promote events with ease.</p>
        <div class="btn-row">
            <a href="https://github.com/Batoul-AbedElSater/eventflow-capstone" target="_blank" class="btn">Source Code</a>
            <a href="https://github.com/Batoul-AbedElSater?tab=repositories" target="_blank" class="btn outline">More Projects</a>
        </div>
        <div class="pg-number">— 6 —</div>
    </div>`;
}

function page6HTML() {
    return `
    <div class="page-content">
        <div class="chapter-label">Chapter VI</div>
        <h1 class="page-title">Contact Me</h1>
        <div class="title-line"></div>

        <div style="display:flex; flex-direction:column; gap:0.75rem; margin-top:0.5rem;">

            <a href="tel:+961 81 209 422" style="display:flex; align-items:center; gap:0.9rem; padding:0.75rem 1rem; border:1.5px solid rgba(123,94,167,0.35); border-radius:8px; background:rgba(123,94,167,0.05); transition:0.3s; color:#1e1410; text-decoration:none;"
               onmouseover="this.style.background='rgba(123,94,167,0.12)'"
               onmouseout="this.style.background='rgba(123,94,167,0.05)'">
                <i class='bx bxs-phone' style="font-size:1.6rem; color:#7b5ea7;"></i>
                <div>
                    <div style="font-size:0.65rem; font-weight:600; color:#7b5ea7; letter-spacing:0.1rem; margin-bottom:0.1rem;">PHONE</div>
                    <div style="font-size:0.85rem; font-weight:600;">+961 209 422</div>
                </div>
            </a>

            <a href="mailto:batoulabdelsater234@gmail.com" style="display:flex; align-items:center; gap:0.9rem; padding:0.75rem 1rem; border:1.5px solid rgba(123,94,167,0.35); border-radius:8px; background:rgba(123,94,167,0.05); transition:0.3s; color:#1e1410; text-decoration:none;"
               onmouseover="this.style.background='rgba(123,94,167,0.12)'"
               onmouseout="this.style.background='rgba(123,94,167,0.05)'">
                <i class='bx bxs-envelope' style="font-size:1.6rem; color:#7b5ea7;"></i>
                <div>
                    <div style="font-size:0.65rem; font-weight:600; color:#7b5ea7; letter-spacing:0.1rem; margin-bottom:0.1rem;">EMAIL</div>
                    <div style="font-size:0.85rem; font-weight:600;">batoulabdelsater234@gmail.com</div>
                </div>
            </a>

            <a href="https://github.com/Batoul-AbedElSater" target="_blank" style="display:flex; align-items:center; gap:0.9rem; padding:0.75rem 1rem; border:1.5px solid rgba(123,94,167,0.35); border-radius:8px; background:rgba(123,94,167,0.05); transition:0.3s; color:#1e1410; text-decoration:none;"
               onmouseover="this.style.background='rgba(123,94,167,0.12)'"
               onmouseout="this.style.background='rgba(123,94,167,0.05)'">
                <i class='bx bxl-github' style="font-size:1.6rem; color:#7b5ea7;"></i>
                <div>
                    <div style="font-size:0.65rem; font-weight:600; color:#7b5ea7; letter-spacing:0.1rem; margin-bottom:0.1rem;">GITHUB</div>
                    <div style="font-size:0.85rem; font-weight:600;">github.com/Batoul-AbedElSater</div>
                </div>
            </a>


        </div>

        <div style="margin-top:0.75rem; display:flex; gap:0.6rem;">
            <a href="pdf/CV.pdf" download class="btn" style="flex:1; justify-content:center; gap:0.4rem;">
                <i class='bx bxs-download'></i> Download CV
            </a>
            <a href="book.pdf" download class="btn outline" style="flex:1; justify-content:center; gap:0.4rem;">
                <i class='bx bxs-book-heart'></i> My Book
            </a>
        </div>

        <div class="pg-number">— 7 —</div>
    </div>`;
}

function backCoverHTML() {
    return `
    <div class="cover-page" style="background: linear-gradient(160deg,#7b5ea7,#5b8fd4,#2ec4c4);">
        <div class="inner-border">
            <span class="star">✦</span>
            <div class="sub" style="font-size:1.1rem;">Thank you<br>for reading.</div>
            <div class="rule"></div>
            <div class="sub">Batoul Ahmad Abed El Sater<br>2026</div>
            <span class="star">✦</span>
        </div>
    </div>`;
}


//  SPREADS — which pages appear left and right


const spreads = [
    { left: coverLeftHTML,  right: coverRightHTML },
    { left: page0HTML,      right: page1HTML      },
    { left: page2HTML,      right: page3HTML      },
    { left: page4HTML,      right: page5HTML      },
    { left: page6HTML,      right: backCoverHTML  },
];



function render(spreadIndex) {
    const leftPage  = document.getElementById('leftPage');
    const rightPage = document.getElementById('rightPage');

    
    leftPage.classList.add('turning');
    rightPage.classList.add('turning');

    setTimeout(() => {
        // Set content
        leftPage.innerHTML  = spreads[spreadIndex].left();
        rightPage.innerHTML = spreads[spreadIndex].right();

        // Style covers differently
        if (spreadIndex === 0) {
            leftPage.style.padding  = '0';
            rightPage.style.padding = '0';
            leftPage.style.background  = 'none';
            rightPage.style.background = 'none';
        } else if (spreadIndex === 4) {
            leftPage.style.padding  = '';
            rightPage.style.padding = '0';
            leftPage.style.background  = '';
            rightPage.style.background = 'none';
        } else {
            leftPage.style.padding  = '';
            rightPage.style.padding = '';
            leftPage.style.background  = '';
            rightPage.style.background = '';
        }

        leftPage.classList.remove('turning');
        rightPage.classList.remove('turning');
    }, 300);
}

//  NAVIGATION

function nextSpread() {
    if (currentSpread < totalSpreads) {
        currentSpread++;
        render(currentSpread);
    }
}

function prevSpread() {
    if (currentSpread > 0) {
        currentSpread--;
        render(currentSpread);
    }
}


function goTo(pageNum) {
    // page 0,1 : spread 1
    // page 2,3 : spread 2
    // page 4,5  : spread 3
    // page 6: spread 4
    if (pageNum === 0 || pageNum === 1) currentSpread = 1;
    else if (pageNum === 2 || pageNum === 3) currentSpread = 2;
    else if (pageNum === 4 || pageNum === 5) currentSpread = 3;
    else if (pageNum === 6) currentSpread = 4;
    render(currentSpread);
}

//  NAV ARROWS 

const arrowsDiv = document.createElement('div');
arrowsDiv.className = 'nav-arrows';
arrowsDiv.innerHTML = `
    <button class="nav-btn" onclick="prevSpread()">‹</button>
    <button class="nav-btn" onclick="nextSpread()">›</button>
`;
document.body.appendChild(arrowsDiv);

render(0);