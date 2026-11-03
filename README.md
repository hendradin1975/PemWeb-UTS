# PemWeb-UTS

1. Group Description

| Name | ID Number | Responsibilities (Pages) |
| --- | --- | --- |
| Komang Hendra Dinata | 2515091044 | SDG, SDG 4, SDG 10, Header, Footer |
| I Putu Rama Pratama | 2515091074 | Inclusion |
| Putu Bagus Oki Bramastana | 2515091107 | About |
| Made Indra Kusuma Yudha | 2515091123 | Home |

2. Title, Theme, & User Target
   - Title: Starlight
   - Theme: Inclusive Education (SDG 4 & SDG 10)
   - User Target: General

3. Objectives, Benefits and Description of Each Pages:

| Pages | Objectives | Benefits & Description |
| --- | --- | --- |
| Home | To introduce Starlight and give visitors a first overview of inclusive education and the SDGs. | Helps visitors quickly understand what the website is about. It contains a hero section, a short explanation of inclusive education, our programs (Lifelong Learning, Inclusive Education, Support Disability, Accessible Education), a brief introduction to the SDGs, and shortcuts to SDG 4 and SDG 10. |
| SDG | To explain what the Sustainable Development Goals are and why this website focuses on SDG 4 and SDG 10. | Gives visitors a basic understanding of the 17 global goals adopted by the United Nations in 2015 as part of the 2030 Agenda. It also explains how SDG 4 and SDG 10 are connected and links to both pages. |
| SDG 4 | To explain SDG 4 (Quality Education) in more detail. | Helps visitors understand the goal of ensuring inclusive, equitable, and quality education and promoting lifelong learning opportunities for all. It covers the purpose of the goal and its relation to inclusive education. |
| SDG 10 | To explain SDG 10 (Reduced Inequalities) in more detail. | Helps visitors understand the goal of reducing inequality within and among countries, including social, economic, and political inclusion for all, such as persons with disabilities. It shows why equality supports access to education. |
| Inclusion | To explain inclusive education and how it is put into practice. | Shows visitors what inclusive education means, who benefits from it, and how schools and communities can support every learner regardless of background or ability. |
| About | To introduce the website and the team behind it. | Gives information about the purpose of Starlight as a learning project, and provides the team members and their contact details. |

4. Implemented Technology
   - HTML5: Builds the website pages and their content.
   - CSS3: Styles the pages and provides responsive layouts with Flexbox, CSS Grid, and media queries (without a CSS framework).
   - JavaScript (Vanilla): Controls the responsive navigation, SDG submenu, and English/Indonesian language selection.
   - Boxicons: Supplies interface icons through the Boxicons CDN.
   - Local fonts: Inter and Poppins are included in the `fonts/` directory.

5. Technology Implementation Explanation
   - **HTML5 and navigation:** Each page has its own HTML file. Semantic elements such as `header`, `nav`, and `main` organize the content. The shared navigation connects pages with relative links:

     ```html
     <ul class="container-menu" id="primary-navigation">
         <li><a href="index.html">Home</a></li>
         <li><a href="pages/sdgs.html">SDG</a></li>
     </ul>
     ```

     The JavaScript opens and closes the mobile menu by changing its state class and the button's accessibility state:

     ```js
     const isOpen = navMenu.classList.toggle('is-open');
     navToggle.setAttribute('aria-expanded', String(isOpen));
     ```

   - **CSS3 and reusable layouts:** All page styles are maintained in `CSS/style.css`. Shared classes reduce repeated declarations; for example, `.flex` provides a reusable Flexbox layout:

     ```css
     .flex {
         display: flex;
         justify-content: center;
         align-items: center;
     }
     ```

   - **Flexbox and CSS Grid:** Flexbox is used for one-dimensional alignment, such as navigation and footer content. CSS Grid arranges repeated content into columns, as in the homepage program cards:

     ```css
     .programs-list {
         display: grid;
         grid-template-columns: repeat(4, 1fr);
         gap: calc(40 * var(--u));
     }
     ```

   - **Responsive design:** Media queries adapt the layout to smaller screens. At widths of 784px and below, the navigation becomes a collapsible menu; at 520px and below, program cards become a single column:

     ```css
     @media (max-width: 784px) {
         .container-menu {
             display: none;
             flex-direction: column;
         }

         .container-menu.is-open {
             display: flex;
         }
     }

     @media (max-width: 520px) {
         .programs-list {
             grid-template-columns: 1fr;
         }
     }
     ```

   - **JavaScript:** `JS/script.js` toggles the mobile navigation and SDG submenu, updates their accessibility attributes, and switches the displayed language. The language choice is saved in `localStorage` so it is restored on the next visit.

6. Folder Structure
   ```
   PemWeb-UTS/
   ├── assets/
<<<<<<< HEAD
   ├── css/
=======
   ├── CSS/
>>>>>>> 62d168b (feat(main): finishing combining)
   │   └── style.css
   ├── fonts/
   ├── images/
   │   ├── about/
   │   ├── Home/
   │   ├── inclusive/
   │   ├── sdgs/
   │   ├── sdgs4/
   │   └── sdgs10/
   ├── JS/
   │   └── script.js
   ├── pages/
   │   ├── about.html
   │   ├── inclusive.html
   │   ├── sdgs.html
   │   ├── sdgs4.html
   │   └── sdgs10.html
   ├── index.html
   └── README.md

7. Website URL & Repository

8. Contents & Assets Reference
   
   a. Image
   - https://www.vecteezy.com/free-vector/design-elements
   - https://images.pexels.com/photos/7495219/pexels-photo-7495219.jpeg
   - https://www.pexels.com/photo/people-sitting-at-the-table-7495219/
