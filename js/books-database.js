// ========== COMPLETE BOOKS DATABASE ==========
// This file contains all books organized by categories and folders
// Structure: Category -> Folder -> Array of Books

const booksDB = {
    "BSIT": {
        "What is computer": [
            { title: "Comsci Software Design.pdf", url: "https://drive.google.com/file/d/1eSsstVDUrM-Jiv0TeuaMRzGqkcibhscw/view?usp=drivesdk" },
            { title: "Introduction To Computers.pdf", url: "https://drive.google.com/file/d/1jp6xAGVARX9udX-J_pA0gDsD9YvUo1th/view?usp=drivesdk" },
            { title: "Introductions To Computer II.pdf", url: "https://drive.google.com/file/d/1_d7YfXTMz3Si8AsETHBqArTam9OxUahC/view?usp=drivesdk" },
            { title: "Introduction To Computers III.pdf", url: "https://drive.google.com/file/d/1PLVXTpeEyWqROnRazBAwHapsikmrnguc/view?usp=drivesdk" }
        ],
        "Troubleshooting and maintenance": [
            { title: "Basic Trouble Shooting.pdf", url: "https://drive.google.com/file/d/1bi_aLYTPuYTDARukD4xLpOOC85i0evby/view?usp=drivesdk" },
            { title: "Pc Assemble.pdf", url: "https://drive.google.com/file/d/1ilnbW1IkzE5yixOgbRPjFvyPtLptiM0c/view?usp=drivesdk" },
            { title: "Pc Hardware Components.pdf", url: "https://drive.google.com/file/d/1Fl8BuEX6zstZGpHdHcu1BTf1UW4F4vue/view?usp=drivesdk" },
            { title: "Repair And Maintenance.pdf", url: "https://drive.google.com/file/d/1GNI-ZNtmUpkJsQahKJtQ9BNO0Oap1PVF/view?usp=drivesdk" }
        ],
        "Systems integration and architecture": [
            { title: "Building Structures Illustrated Patterns, Systems, and Design.pdf", url: "https://drive.google.com/file/d/1D-CV_f4-phKS4gg73upZA3fGD_CmAMdV/view?usp=drivesdk" },
            { title: "Computer systems architecture.pdf", url: "https://drive.google.com/file/d/12djvjvaWSxj4cnmiCZVlYdVjCk3Arzaz/view?usp=drivesdk" },
            { title: "Enterprise Integration and Information Architecture A Systems Perspective on Industrial Information Integration.pdf", url: "https://drive.google.com/file/d/1ffG7Oo1mBk3Jv2F4Nu9dKN0hquA38Zhw/view?usp=drivesdk" },
            { title: "Integrated Buildings The Systems Basis of Architecture.pdf", url: "https://drive.google.com/file/d/1cT9oVNwCNsmo8O_-zED7ooxoNwZqU1b_/view?usp=drivesdk" },
            { title: "Microservices Flexible Software Architecture.pdf", url: "https://drive.google.com/file/d/1z8Kv0eQLUofnms5ojTtM_mrDhHN8C9qU/view?usp=drivesdk" }
        ],
        "Security": [
            { title: "Bruteforce.pdf", url: "https://drive.google.com/file/d/1ZF9LD8YGQczBw1GEHd5Ohg8GL6u-Mmlg/view?usp=drivesdk" },
            { title: "Computer Viruses.pdf", url: "https://drive.google.com/file/d/16rgpu7sy5v-k8C3K8W_mt4LJNoY-6YFo/view?usp=drivesdk" },
            { title: "Cybercrime.pdf", url: "https://drive.google.com/file/d/1U55oWyVP85ggFcar1rS6gu9SkI4yxJFw/view?usp=drivesdk" },
            { title: "DDOS.pdf", url: "https://drive.google.com/file/d/1FaS_ScEi9z26t1ykh6jsGySn6_-3RBQM/view?usp=drivesdk" },
            { title: "Malware.pdf", url: "https://drive.google.com/file/d/1mkj_APR9oBkkt27kfoxZwi9W6iWWl9Y8/view?usp=drivesdk" },
            { title: "Phishing.pdf", url: "https://drive.google.com/file/d/1QYknnXsQqpoxgoTKgk4bC4DiVxZ5XMQb/view?usp=drivesdk" }
        ],
        "Programming languages": [
            { title: "C#.pdf", url: "https://drive.google.com/file/d/1e4Uep9xuc-dzdozfzt8pIuNOoPCjIvt_/view?usp=drivesdk" },
            { title: "C++.pdf", url: "https://drive.google.com/file/d/14aNgdVOtoFVIGCGoKnlU7FFRWR49Sn0V/view?usp=drivesdk" },
            { title: "Databases.pdf", url: "https://drive.google.com/file/d/1xmRdzsUQo1Dod85Pez6SqnFkP-noWrxm/view?usp=drivesdk" },
            { title: "GO.pdf", url: "https://drive.google.com/file/d/1seInVVVmctKG7uUAeteqtrMdr-Q549aS/view?usp=drivesdk" },
            { title: "HTML5 CSS JS SQL.pdf", url: "https://drive.google.com/file/d/19b2IDiEW5eJkhv9M2I-mVXaZY06lQ3dU/view?usp=drivesdk" },
            { title: "Introduction To Programming I.pdf", url: "https://drive.google.com/file/d/1p8s1qdrioWrzyr9NCkpxLt1CGyuwX0N3/view?usp=drivesdk" },
            { title: "Introduction To Programming II.pdf", url: "https://drive.google.com/file/d/1V5J6oOShct_lczv8fjnxS2p_Rrx6JthF/view?usp=drivesdk" },
            { title: "JAVA SCRIPT.pdf", url: "https://drive.google.com/file/d/1lMvEiN4_bzeDkyoinqHfl0B5msriY9jQ/view?usp=drivesdk" },
            { title: "JAVA.pdf", url: "https://drive.google.com/file/d/1r4WsDLBdQlW9ruF5G-eBc74R5sjcXJ0Q/view?usp=drivesdk" },
            { title: "MYSQL.pdf", url: "https://drive.google.com/file/d/1ODER-D55IY0GTOhx4gOFFaI5WMJLh8qR/view?usp=drivesdk" },
            { title: "PERL.pdf", url: "https://drive.google.com/file/d/1xxSL2HIOHyDvggQUqXQeNtVaYI1wpPjp/view?usp=drivesdk" },
            { title: "PHP.pdf", url: "https://drive.google.com/file/d/1jo92O_mX9JvyUAUWOncm-i3HKSOiSPDd/view?usp=drivesdk" },
            { title: "PYTHON.pdf", url: "https://drive.google.com/file/d/1fUeANhNQUlfbXmxo8NGEIQw3zgEDhxi3/view?usp=drivesdk" },
            { title: "R.pdf", url: "https://drive.google.com/file/d/1DdyhiBZfzkdAJia91lSMjfemwPQuGNwB/view?usp=drivesdk" },
            { title: "RUBY.pdf", url: "https://drive.google.com/file/d/1SKS6XLU-Yfd5VhsbH28ixKy1x-kN8kHV/view?usp=drivesdk" },
            { title: "SWIFT.pdf", url: "https://drive.google.com/file/d/1vTAH7ZqSD1LcAwqe47QZ_uq9xI3OFwp7/view?usp=drivesdk" }
        ],
        "Other IT Books": [
            { title: "Devops Handbook.pdf", url: "https://drive.google.com/file/d/1cIE3tNQjebDmE482bk-Ws3lP7ZcefBmt/view?usp=drivesdk" },
            { title: "Open Enterprise.pdf", url: "https://drive.google.com/file/d/1TWBnnwt1RNNQA2xFswtQLQBx7EjU5kb9/view?usp=drivesdk" },
            { title: "Phoenix Project.pdf", url: "https://drive.google.com/file/d/1Hubsx_0T0PhP-WZxiR3AXtUUc80zdTwT/view?usp=drivesdk" }
        ],
        "Operating systems": [
            { title: "Introduction To OS.pdf", url: "https://drive.google.com/file/d/13IFbUhWoBRZaDZDJkTLXMZ5YZDpn8DOM/view?usp=drivesdk" },
            { title: "Linux.pdf", url: "https://drive.google.com/file/d/1Y82k0SQSid9Hfdazy_ap7OGHEztGuH4a/view?usp=drivesdk" },
            { title: "Mac OS.pdf", url: "https://drive.google.com/file/d/15cc0QSnzuh35fMSGSFgIIRjj7sqJYq0b/view?usp=drivesdk" },
            { title: "OS Installation.pdf", url: "https://drive.google.com/file/d/1LsB3Jl3q4kiKDw03h2vq-P0hMHBesYYn/view?usp=drivesdk" },
            { title: "Windows.pdf", url: "https://drive.google.com/file/d/1OidgkTp3uAWjv45bnKfjGx7ZkXA6Neio/view?usp=drivesdk" }
        ],
        "Networks": [
            { title: "Adversarial Network Python.pdf", url: "https://drive.google.com/file/d/1Knrt0YgGNkeJkbTayDbvJCKRWZE1eYjf/view?usp=drivesdk" },
            { title: "Introduction To Email.pdf", url: "https://drive.google.com/file/d/16Yi449_ZUC8N4T1lhflXQVtOgowlHmT4/view?usp=drivesdk" },
            { title: "Network Architechture.pdf", url: "https://drive.google.com/file/d/12SHTKOyO8xrv21WSf9N03_r6iiQLgZQ7/view?usp=drivesdk" },
            { title: "Networks.pdf", url: "https://drive.google.com/file/d/19PwssOnUhav8yDOz72ZRWK6cdjhDDUHj/view?usp=drivesdk" },
            { title: "Practical Network Automation.pdf", url: "https://drive.google.com/file/d/1jGKDw9kQXkrjvmpVqfLQKYZWCpfBL_gM/view?usp=drivesdk" },
            { title: "Pro Python System Administration.pdf", url: "https://drive.google.com/file/d/16W6vxwKH1aiXtJh-PWfa-WTxnWJMtQEa/view?usp=drivesdk" },
            { title: "Python Network Program.pdf", url: "https://drive.google.com/file/d/1cjQ6nkhU4-89kHse9JOMFz71sGiSRLca/view?usp=drivesdk" },
            { title: "Python Networking I.pdf", url: "https://drive.google.com/file/d/1tsv1iTduKFpo7E0Unz6GssVT3P1THHyH/view?usp=drivesdk" },
            { title: "Python Networking II.pdf", url: "https://drive.google.com/file/d/15nr7PUYB4-UQyg7BP-NwTLBNUWy7UmX9/view?usp=drivesdk" },
            { title: "Python Networking III.pdf", url: "https://drive.google.com/file/d/1H2vpfQ_Bw6IPaf7w2VvUzxKBvRgmlC4t/view?usp=drivesdk" },
            { title: "Understanding Hacking.pdf", url: "https://drive.google.com/file/d/1WXGNn-lu1_q8kqi7SNTOT1WVaSuvgmef/view?usp=drivesdk" }
        ],
        "More IT Books": [
            { title: "Accelerate The Science of Lean Software and DevOps Building and Scaling High Performing Technology Organizations.pdf", url: "https://drive.google.com/file/d/1MBYMquO4LCHbjYN000ImD0JSdaPkfu3h/view?usp=drivesdk" },
            { title: "App Inventor 2 Create Your Own Android Apps.pdf", url: "https://drive.google.com/file/d/1dqz7yDDfcfzcbrDSFFEsKqKbXKCPwyxK/view?usp=drivesdk" },
            { title: "Applications Code + Markup A Guide to the Microsoft Windows Presentation Foundation (Pro - Developer).pdf", url: "https://drive.google.com/file/d/10fgZFpLYUFw_fOqcu8G7iyJX1AxwOz4W/view?usp=drivesdk" },
            { title: "Building Scalable PHP Web Applications Using the Cloud A Simple Guide to Programming and Administering Cloud-Based Applications.pdf", url: "https://drive.google.com/file/d/1eBL0Ds3KxA-ebzHrFFFmTrsKJkKrIbrG/view?usp=drivesdk" },
            { title: "Business Data Communications Infrastructure, Networking and Security 7e.pdf", url: "https://drive.google.com/file/d/1lHjXnb-99e5QB2PIZAZcTwdZSNaDBJUN/view?usp=drivesdk" },
            { title: "Computer Organization and Architecture Designing for Performance 10e.pdf", url: "https://drive.google.com/file/d/1hxrWFHShy5LN1ZCDzv1cWBH6o-nKNNKw/view?usp=drivesdk" },
            { title: "Human Computer Interaction Fundamentals and Practice.pdf", url: "https://drive.google.com/file/d/1fU12AX_j87vUtAl0a9R-GZlSqQJtxxZJ/view?usp=drivesdk" },
            { title: "Introducing JavaScript Game Development.pdf", url: "https://drive.google.com/file/d/1FkakzEHoS1-6doqNzbRn2WsHOcddrd32/view?usp=drivesdk" },
            { title: "Program the Internet of Things with Swift for iOS Learn how to program apps for the Internet of Things.pdf", url: "https://drive.google.com/file/d/1c2erDlqHlJamunEXmLcMZuSH1lqRAo_e/view?usp=drivesdk" },
            { title: "Programming Windows 6e Writing Windows 8 Apps With c# and XAML.pdf", url: "https://drive.google.com/file/d/1a0MzysjTnJQNdtrXXI3XHtMROBkNpyx6/view?usp=drivesdk" },
            { title: "Soft Skills The Software Developers Life Manual.pdf", url: "https://drive.google.com/file/d/1Wl6C0vSkQrpK69XmghKrse80IUcjbUyQ/view?usp=drivesdk" }
        ],
        "Arduino": [
            { title: "Arduino For Beginners.pdf", url: "https://drive.google.com/file/d/13mBAi18a24rXA7M8N6Gk4KZ3ljHzTFcz/view?usp=drivesdk" },
            { title: "Arduino For Beginners REV2.pdf", url: "https://drive.google.com/file/d/16J8-G1KTJ1kKEbwjrvj_6jDNzCmXs-kG/view?usp=drivesdk" },
            { title: "Arduino Programming Notebook.pdf", url: "https://drive.google.com/file/d/1cpFBN-qNTOuzse51dgXVtAvtXVydCaYj/view?usp=drivesdk" },
            { title: "Arduino projects book.pdf", url: "https://drive.google.com/file/d/1Xlb1NoRrV_631rxiCSbm59yspiro72Gm/view?usp=drivesdk" },
            { title: "Arduino Workshop.pdf", url: "https://drive.google.com/file/d/1x0XvCR6nu0-h3UVYqljnIYWXNmrwM85x/view?usp=drivesdk" },
            { title: "Beginning Robotics with Raspberry Pi and Arduino.pdf", url: "https://drive.google.com/file/d/1njyNGQkMDiFJ017rz7AzEbn1hAUH0z0W/view?usp=drivesdk" },
            { title: "Getting Started with Sensors.pdf", url: "https://drive.google.com/file/d/1NXsf1zLB5WQJIIPi63jPpAEbaRPSBpBo/view?usp=drivesdk" },
            { title: "Intro to Arduino.pdf", url: "https://drive.google.com/file/d/178R8qqCjuP9XkWSXqmXh05wv9Aq_4FQh/view?usp=drivesdk" },
            { title: "Make an Arduino Controlled Robot.pdf", url: "https://drive.google.com/file/d/1McQzeJgf9GAUbP138ikLG9rhSjWW0M7y/view?usp=drivesdk" },
            { title: "Programming with Arduino.pdf", url: "https://drive.google.com/file/d/1gR_7Mh6sSlp7gcoGgfPoDGqeUzCug9LO/view?usp=drivesdk" }
        ],
        "Data structure and algorithms": [
            { title: "Data Structures And Algorithms I.pdf", url: "https://drive.google.com/file/d/14NKNmDhttrX3BEj8IKG8tXLYfWJAFkAz/view?usp=drivesdk" },
            { title: "Data Structures And Algorithms II.pdf", url: "https://drive.google.com/file/d/1rpixJM4r1KikAh4fgQV29PjrY1halveP/view?usp=drivesdk" },
            { title: "Data Structures And Algorithms III.pdf", url: "https://drive.google.com/file/d/1u8JGPA_d2qExiu1qIPY-_KEEhTft6-GQ/view?usp=drivesdk" },
            { title: "Introduction To DSA.pdf", url: "https://drive.google.com/file/d/19x5UxhvbmONyhJPXdOgRtBoAe-4ycVQV/view?usp=drivesdk" }
        ],
        "Digital design": [
            { title: "Adobe Acrobat.pdf", url: "https://drive.google.com/file/d/1R2xrymodMcptfQa6LodlcH00bnHJa2wa/view?usp=drivesdk" },
            { title: "Adobe Illustrator.pdf", url: "https://drive.google.com/file/d/1zZdOBot8g4mj-aTIUjzGa6t2jDFz5vc8/view?usp=drivesdk" },
            { title: "Corel Draw Tutorial.pdf", url: "https://drive.google.com/file/d/10joZrhvpJZMbS-t4TPmWe2ALW8PtGYol/view?usp=drivesdk" },
            { title: "Design Principles.pdf", url: "https://drive.google.com/file/d/1sIDhRB65fqkj6t040Y3C00XVajftRIMb/view?usp=drivesdk" },
            { title: "Graphic Design.pdf", url: "https://drive.google.com/file/d/1PitiXEtLo2WlVJ0-Z5UCBbzL-c8wxkdR/view?usp=drivesdk" },
            { title: "Photoshop.pdf", url: "https://drive.google.com/file/d/1b7oL3kujjHw5YIrmUYOAcGAv4Yt5jvk8/view?usp=drivesdk" },
            { title: "Web Design.pdf", url: "https://drive.google.com/file/d/1W_OFWC2o_x7Fpy4c5UcsKZwNXq6Aqpxy/view?usp=drivesdk" }
        ],
        "Discrete structures": [
            { title: "An Introduction to Discrete Structures.pdf", url: "https://drive.google.com/file/d/1X17apl2WhZ5QIrbY4jtJomTEWwSGcTzf/view?usp=drivesdk" },
            { title: "Discrete Mathematics Notes.pdf", url: "https://drive.google.com/file/d/1VHVgPsp5ITnfQ0r2OS7wOUhTZ5ToDwqu/view?usp=drivesdk" },
            { title: "Discrete Structures I.pdf", url: "https://drive.google.com/file/d/1nkCY2bX5n43OQbRI39WGduskHRHlsd_s/view?usp=drivesdk" },
            { title: "Discrete Structures II.pdf", url: "https://drive.google.com/file/d/14ynwy6LD1T1kohwuynkdN0P0kQOovjR5/view?usp=drivesdk" },
            { title: "Discrete Structures III.pdf", url: "https://drive.google.com/file/d/1he994kzIt7CMez_962epfHjQ-7WGykMd/view?usp=drivesdk" },
            { title: "Discrete Structures IV.pdf", url: "https://drive.google.com/file/d/1-uM18RGJI3Cx9CGAM5NKJqs4hqZWWPmd/view?usp=drivesdk" },
            { title: "Discrete Strutures Made Easy.pdf", url: "https://drive.google.com/file/d/1hM7CAOqCgVSmCiRdcl_1q3i84AKEJflf/view?usp=drivesdk" }
        ],
        "Engineering mechanics": [
            { title: "Engineering Mechanics I.pdf", url: "https://drive.google.com/file/d/1JoB7EvUcw3z13pAU8CL0CLm2riYF6du-/view?usp=drivesdk" },
            { title: "Engineering Mechanics II.pdf", url: "https://drive.google.com/file/d/1pwgWT2TRJBaojubkvvh-q3cJI_vssXiQ/view?usp=drivesdk" },
            { title: "Engineering Mechanics III.pdf", url: "https://drive.google.com/file/d/1a_aCfI048G5YGLpH_vBSm5gNtOMlVHZ_/view?usp=drivesdk" }
        ],
        "Ethical hacking": [
            { title: "Black Hat Vs White Hat.pdf", url: "https://drive.google.com/file/d/1TVGr0zRW7sorFfrUwP1djdbcTG-9Eiuz/view?usp=drivesdk" },
            { title: "Deep Web.pdf", url: "https://drive.google.com/file/d/1MVdYyl5JxH7JkMf8n4l7_M-c-WAoZfNW/view?usp=drivesdk" },
            { title: "Ethical Hacking.pdf", url: "https://drive.google.com/file/d/16QDlMf1ufukwSzEJjQ8t5YDkZ7rHMiFy/view?usp=drivesdk" },
            { title: "Hacking Computer Hacking Security Testing Penetration Testing and Basic Security.pdf", url: "https://drive.google.com/file/d/1q-B_E-4j30_JfF3iHfWZxEcD0swTCEul/view?usp=drivesdk" },
            { title: "Penetration Hacking.pdf", url: "https://drive.google.com/file/d/1ndZ1I3Xy0dK85NWnBQbtQYcHYLn5hfpF/view?usp=drivesdk" },
            { title: "Techniques And Tools.pdf", url: "https://drive.google.com/file/d/1HsvChQ5DR1-gKkZ66GhKSmy0W8vRciGg/view?usp=drivesdk" },
            { title: "TOR browser.pdf", url: "https://drive.google.com/file/d/19nqjRvwekCPr7PWvI4TXFW9gOkQ5a5j2/view?usp=drivesdk" },
            { title: "What Is Linux.pdf", url: "https://drive.google.com/file/d/1lc6dxu49RRpFqNwjAwJkSNywBxdpFi1o/view?usp=drivesdk" }
        ],
        "Hardware vs software": [
            { title: "Computer Hardware.pdf", url: "https://drive.google.com/file/d/1rgytgUQ_aymZwrojMeORbSst2h6ZaSK0/view?usp=drivesdk" },
            { title: "Computer Software.pdf", url: "https://drive.google.com/file/d/1sbbzQJlNaig5rT9-YQsK9UN4xEYXIHyH/view?usp=drivesdk" },
            { title: "Hardware vs Software II.pdf", url: "https://drive.google.com/file/d/1mOJbizd3dRW3VUXnU6WG71qgRGjbrUQM/view?usp=drivesdk" },
            { title: "Hardware vs Software.pdf", url: "https://drive.google.com/file/d/1_jKGMJtvmbF1Kw1sbR7z54ONPppxanrl/view?usp=drivesdk" }
        ],
        "History of computers": [
            { title: "History Of Computers II.pdf", url: "https://drive.google.com/file/d/1WpjHloUJOucZzL_XqqMJy-wWkAFYs1ud/view?usp=drivesdk" },
            { title: "History Of Computers.pdf", url: "https://drive.google.com/file/d/1IgBoof4MAkJlrMZ4VEuvXj-UAPsUoPOf/view?usp=drivesdk" }
        ],
        "Human computer interaction": [
            { title: "Beyond human computer interaction ( PDFDrive ).pdf", url: "https://drive.google.com/file/d/1dzGvSXfMAv8ppNnBEsKiPYka3x96IGAr/view?usp=drivesdk" },
            { title: "Brain-Computer Interfaces Applying our Minds to Human Computer Interaction ( PDFDrive ).pdf", url: "https://drive.google.com/file/d/1xQO5VOVrfQgrUwigBI2oXvWLS0HBkypq/view?usp=drivesdk" },
            { title: "Computer 1.PDF", url: "https://drive.google.com/file/d/1Wa7OqlheUkOkfpNmhJoCRGcTmQytLipz/view?usp=drivesdk" },
            { title: "Encyclopedia Of Human Computer Interaction ( PDFDrive ).pdf", url: "https://drive.google.com/file/d/1f2CWTmO3EpFFOAO_nJFj8le35ajT_sNX/view?usp=drivesdk" },
            { title: "Human computer interaction ( PDFDrive ).pdf", url: "https://drive.google.com/file/d/1gXf3f8QsgeaWEDkt7y04TVtcA7fNXoF6/view?usp=drivesdk" },
            { title: "Interaction Design Beyond Human Computer Interaction ( PDFDrive ).pdf", url: "https://drive.google.com/file/d/10WlA7O9QOdkwX3pgGeslAImEWH35tPXL/view?usp=drivesdk" },
            { title: "Interaction Design Beyond Human Computer Interaction, 4th Edition ( PDFDrive ).pdf", url: "https://drive.google.com/file/d/1hlE28djM__fpWcGm-LOe4vz9umLeniTn/view?usp=drivesdk" },
            { title: "Introduction to Visual Computing Core Concepts in Computer Vision, Graphics, and Image Processing ( PDFDrive ).pdf", url: "https://drive.google.com/file/d/1_NQj3iAS-bC8ibWo0rRF1IaHDVyZw9iM/view?usp=drivesdk" }
        ],
        "Imperative programming": [
            { title: "Imperative Programming I.pdf", url: "https://drive.google.com/file/d/1lMv8DTOOhe_QUMUKjslxSMP3R6H2nsPG/view?usp=drivesdk" },
            { title: "Imperative Programming Languages I.pdf", url: "https://drive.google.com/file/d/1el2XXbbDM7RXscp0QO-kqWpc4lUOv7Fa/view?usp=drivesdk" },
            { title: "Imperative Programming Languages II.pdf", url: "https://drive.google.com/file/d/14TkOnPccYR765KAJ3jT-OQACwKFpigKK/view?usp=drivesdk" },
            { title: "Imperative Programming Program Flow.pdf", url: "https://drive.google.com/file/d/1SMUCpBToDHbdm436CvAH6Zmcr4pK3lEX/view?usp=drivesdk" },
            { title: "Introduction to Imperative Programming.pdf", url: "https://drive.google.com/file/d/1jGN4-wV2HPADd9v-I_xx68C81cXj3Cjk/view?usp=drivesdk" },
            { title: "Microsoft Imperative Programming Lesson.pdf", url: "https://drive.google.com/file/d/121m576FhIwvlgrXTg06NTI8C9TWAWtjQ/view?usp=drivesdk" },
            { title: "Origin of Imperative Programming.pdf", url: "https://drive.google.com/file/d/1RFQZdVMUMHAD7Bj8cgdd8bLENO-pCtLg/view?usp=drivesdk" }
        ],
        "Information computing": [
            { title: "Code Complete 2nd Edition.pdf", url: "https://drive.google.com/file/d/1IZdX5qAOcySptF4b-Tm_w8qZaEBAr15x/view?usp=drivesdk" },
            { title: "Computing I.pdf", url: "https://drive.google.com/file/d/1-wS0Iz3OIxCoz9yfwYEjf5qojAi73L4I/view?usp=drivesdk" },
            { title: "Computing II.pdf", url: "https://drive.google.com/file/d/1IghthJqXAOKBXyCsYRGaWCeUXJZAjRaW/view?usp=drivesdk" },
            { title: "Computing III.pdf", url: "https://drive.google.com/file/d/1dqYGABOKxUfahHzLooRkm2lYc2Sbj9xA/view?usp=drivesdk" },
            { title: "Introduction to Computers and Computing.pdf", url: "https://drive.google.com/file/d/1gfLRZTJrCevEEsZ3YDNq44E0vg8Zw3Ab/view?usp=drivesdk" },
            { title: "Introduction to Computing I.PDF", url: "https://drive.google.com/file/d/161_EFGRUW6lBvWPG4Hqyv4fZmGFDTtlD/view?usp=drivesdk" },
            { title: "Introduction to Computing II.pdf", url: "https://drive.google.com/file/d/11ZZof-ewqD3-pSCH3n_o2OWcHd_RxhUV/view?usp=drivesdk" },
            { title: "Quantum Computing for Everyone.pdf", url: "https://drive.google.com/file/d/1y2Ucixqz0lne4_g5Wc78FodDKtJRgByG/view?usp=drivesdk" }
        ],
        "Mathematics": [
            { title: "College Algebra.pdf", url: "https://drive.google.com/file/d/1L0txidL30PmWOWmC8jwycDO_O-Dvmk7I/view?usp=drivesdk" },
            { title: "College Calculus.pdf", url: "https://drive.google.com/file/d/1aBYz_YQ-Pnew8pHBgnammLYd72sXBl-6/view?usp=drivesdk" },
            { title: "Engineering Mathematics.pdf", url: "https://drive.google.com/file/d/1Vi_MmSh_eFYY7soAx2FwxHZZ3qSoHqc5/view?usp=drivesdk" },
            { title: "Microcomputers.pdf", url: "https://drive.google.com/file/d/1Yhcd99MFcDC-Q4omIYihpg8MLXNIZTm1/view?usp=drivesdk" },
            { title: "Network And Systems.pdf", url: "https://drive.google.com/file/d/1_tQcqFDEhvcBRC49BTJnLgzeHn7eMzNE/view?usp=drivesdk" },
            { title: "Pre Calculus I.pdf", url: "https://drive.google.com/file/d/1Qmzw8DxHibELVAh7DWhcGa5Kuit9LESY/view?usp=drivesdk" },
            { title: "Pre Calculus SHS.pdf", url: "https://drive.google.com/file/d/10W4PBJyzBPdKJEw1qDX02BcfRQzrjKZ1/view?usp=drivesdk" }
        ]
    },
    "BSIT (GenEd)": [
        { title: "Art Appreciation", url: "https://drive.google.com/file/d/1CbAlsokC_oVB5f-0ApcOitOneUwKFRCX/view" },
        { title: "Business Math", url: "https://drive.google.com/file/d/1i0p_USGGN3iIailUjGXzNrbs4NAM-vok/view" },
        { title: "Contemporary business math", url: "https://drive.google.com/file/d/1VjHOrmVDgNjRFUvM0K45GmhGXxNlE4UY/view" },
        { title: "Contemporary World", url: "https://drive.google.com/file/d/1uyXBxWNfy58dr2rOc6Q6Tnp1pJlzsi59/view" },
        { title: "Ethics", url: "https://drive.google.com/file/d/1VpDtZdMJowCCnnitubOm_EEQH07H6s0D/view" },
        { title: "Gender and Society", url: "https://drive.google.com/file/d/1D1n0ksp9IZLMkiJqk7EyXCc9O8xvdHef/view" },
        { title: "Kontekstwalisadong Komunikasyon", url: "https://drive.google.com/file/d/1FnrE2BKYFi3SS4CTVSXA6EQ06J7ZARoc/view" },
        { title: "Life and Works of Rizal", url: "https://drive.google.com/file/d/1uT-GbRE6dECSj9koiySbq4mwi2_ZdTo9/view" },
        { title: "Living in the IT Era", url: "https://drive.google.com/file/d/1_9sIQVZysmgh6nDA_RNalIwwIIx_IPi8/view" },
        { title: "Mathematics for economics", url: "https://drive.google.com/file/d/1X2uUJOEdun510W8zOpJ6r6CWMKpDplpd/view" },
        { title: "Mathematics in Modern World", url: "https://drive.google.com/file/d/1nEzkp1dQ84iNnupUxMEXZY9hUWv1DdXT/view" },
        { title: "NSTP CWTS", url: "https://drive.google.com/file/d/1iXQRS-VHlaB3epCs0eAMvGag13vWEH29/view" },
        { title: "PATHFIT", url: "https://drive.google.com/file/d/1ZMhIC_h8_iRl-7ygWG1FEytksy5y2YUX/view" },
        { title: "Purposive Communication", url: "https://drive.google.com/file/d/18P53z-WdCR585F9CBCRJbBjHopo9CJoS/view" },
        { title: "READING IN PHILIPPINE HISTORY", url: "https://drive.google.com/file/d/1Bz2TXQc-UhKee7qyc3EXeB7wRfKFjis-/view" },
        { title: "Science, Technology, Society", url: "https://drive.google.com/file/d/1OxhQji8Sva6b37F3pI_Q7KyDzNls0OEe/view" },
        { title: "UNDERSTANDING SELF", url: "https://drive.google.com/file/d/17eNr4IuWCACDyeDK3JQyuLB_b-ZMEh4N/view" }
    ],
    "Stocks, Trading, & Investment": [
        { title: "Trade Your Way to Financial Freedom", url: "https://drive.google.com/file/d/1Ic-SKf0KFICBhQDS88zSMfzGeO-BFU4y/view?usp=sharing" },
        { title: "Stocks on the Move Beating the Market with Hedge Fund Momentum Strategies", url: "https://drive.google.com/file/d/1583RgWcOI4TY4JK_WZ467NiEVSAf3GYf/view?usp=sharing" },
        { title: "Stan Weinstein's Secrets for Profiting in Bull and Bear Markets", url: "https://drive.google.com/file/d/1ta3ow2atnmWdKNq6wfzZhhsapG9duhqS/view?usp=sharing" },
        { title: "Secrets of a Pivot Boss Revealing Proven Methods for Profiting in the Market", url: "https://drive.google.com/file/d/1OG3oesZ0t8PB24OUpmVPClX3fO_H5DeL/view?usp=sharing" },
        { title: "Quantitative Trading Systems Practical Methods for Design, Testing, and Validation", url: "https://drive.google.com/file/d/18M66T-x54RcGfVd7yEFcuwBd8q-jutEl/view?usp=sharing" },
        { title: "Price Action Breakdown: Exclusive Price Action Trading Approach to Financial Markets", url: "https://drive.google.com/file/d/1s9PYR4P6ID48nxoeE6LewCLejyl9rtoG/view?usp=sharing" },
        { title: "Mark Minervini - Momentum Masters", url: "https://drive.google.com/file/d/1YTK1kQzZcKLtaAUP61ZCT144UUfiwgvM/view?usp=drivesdk" },
        { title: "Secrets Of The Trading Pros", url: "https://drive.google.com/file/d/1q75N_cfLkf_7ZaVdaSkpoxc4w0SjqJbb/view?usp=drivesdk" },
        { title: "Technical Analysis of the Financial Markets by John J. Murphy", url: "https://drive.google.com/file/d/1xVn3wBdghX1B8Jbt-bZ9ULF4MhDt9ARh/view?usp=drivesdk" },
        { title: "The Lifecycle Trade: How to Win at Trading IPOs and Super Growth Stocks", url: "https://drive.google.com/file/d/1DXWDBmFh2xiz9KYpeRdTeVd0iWTZpIaf/view?usp=drivesdk" },
        { title: "THE MARKET WIZARDS - Traders Laboratory", url: "https://drive.google.com/file/d/1kU5SIjkFBi5EypYptOnXAGbyfF22H6qG/view?usp=drivesdk" },
        { title: "The New Market Wizards: Conversations with America's Top Traders", url: "https://drive.google.com/file/d/1O19CEUFk4gXpUvK9caPz2gVvlK2o_NKg/view?usp=drivesdk" },
        { title: "The Right Stock at the Right Time by Larry Williams", url: "https://drive.google.com/file/d/1J6rw7ty1O93HolKoWOnwCwkyi_NhHyhF/view?usp=drivesdk" },
        { title: "The Secrets of Selecting Stocks for Immediate and Substantial Gains by Larry Williams", url: "https://drive.google.com/file/d/10FZWS0vO_d7Rf4iWFcL56k1OwGVr9Mf3/view?usp=drivesdk" },
        { title: "THE TOP 100 TRADING RULES OF ALL TIME by RAYNER TEO", url: "https://drive.google.com/file/d/12wbEZMYail27aboyMeDumTuHz1Ibi5lX/view?usp=drivesdk" },
        { title: "The-Ultimate-Guide-To-Price-Action-Trading", url: "https://drive.google.com/file/d/1-M8Ic4MHCF2W-ibX-caPRtG_7RbC3BSE/view?usp=drivesdk" },
        { title: "Trade Like a Stock Market Wizard by Mark Minervini", url: "https://drive.google.com/file/d/1BLBdnUVfDZlc-wYJQS1XiccoEcUG-tRJ/view?usp=drivesdk" },
        { title: "Trade Stocks & Commodities with the Insiders Secrets of the COT Report by Larry Williams", url: "https://drive.google.com/file/d/1BPflWQ-pGE57kZEr4UNAg5ekhF4ds1kx/view?usp=drivesdk" },
        { title: "Benjamin Graham - The Intelligent Investor", url: "https://drive.google.com/file/d/1feSpTWBRVMftELAt8n8oVGAYqsaTz9S3/view?usp=drivesdk" },
        { title: "Brent Penfold - The Universal Principles of Successful Trading", url: "https://drive.google.com/file/d/1KR-LzB1boFe0hqKSR4Q_Um3Rfs2puyN9/view?usp=drivesdk" },
        { title: "Day Trading and Swing Trading the Currency Market by Kathy Lien", url: "https://drive.google.com/file/d/1Fts3ScX0V4wGZHoTeVmKf_79hPFeaT1K/view?usp=drivesdk" },
        { title: "Day Trading Forex - Velez Odin", url: "https://drive.google.com/file/d/1QvXLYI3_81llWpJYeFkx_mlelT31iGxO/view?usp=drivesdk" },
        { title: "Pit Bull: Lessons from Wall Street's Champion Day Trader", url: "https://drive.google.com/file/d/1MFu9D5xCbdfEfrBrBgMik9s76CgNEHr_/view?usp=drivesdk" },
        { title: "Mind Over Markets by James F. Dalton", url: "https://drive.google.com/file/d/1lD07CUyM5dp-vSVWB_EbTULnkxW8xYuu/view?usp=drivesdk" },
        { title: "One Good Trade by Mike Bellafiore", url: "https://drive.google.com/file/d/1FyX-3QCXi2_y5EL34QOpndoW6VgzmYpL/view?usp=drivesdk" },
        { title: "Mark Douglas - The Disciplined Trader", url: "https://drive.google.com/file/d/11PlKfaKdE5Br1WPMuyT083uf2IOvq3vX/view?usp=drivesdk" },
        { title: "Long-Term Secrets to Short-Term Trading by Larry Williams", url: "https://drive.google.com/file/d/1B3WBymSrt4oXs4b_etNarbkPYbv97C4x/view?usp=drivesdk" },
        { title: "John C. Bogle - The Little Book of Common Sense Investing", url: "https://drive.google.com/file/d/1a_LACGD0yCljkarbUkNr-mi1u2ChC8cv/view?usp=drivesdk" },
        { title: "John C. Bogle - Common Sense on Mutual Funds", url: "https://drive.google.com/file/d/1Bn-F1ENHr_kAKk23SDYW8SmxvCOt3iW2/view?usp=drivesdk" },
        { title: "Day Trading Made Easy - Matthew R Kratter", url: "https://drive.google.com/file/d/1h6QiOnpTYFSorx3jKNLXf-jxfeAFixP1/view?usp=drivesdk" },
        { title: "Following the Trend by Clenow, Andreas F", url: "https://drive.google.com/file/d/1CXyE6AHgRY25m3avKNqrX0TqACWH9_Rd/view?usp=drivesdk" },
        { title: "Forex Price Action Scalping by Bob Volman", url: "https://drive.google.com/file/d/1MCWtWvaslva0HipPpdSw2GhrPOFX5q5y/view?usp=drivesdk" },
        { title: "Forex Range Trading With Price Action", url: "https://drive.google.com/file/d/1JUsBFujI46_-zKnaNWJvguUz4ONuJUL4/view?usp=drivesdk" },
        { title: "Forex Trading - Jim Brown", url: "https://drive.google.com/file/d/1x0Ii4jAl3cChw_MX6SxX2M3mAj2Qrbm5/view?usp=drivesdk" },
        { title: "Futures Made Simple by Kel Butcher", url: "https://drive.google.com/file/d/1xwd28FHIQ8nB8XaKsDWV-JaiTop9vjuw/view?usp=drivesdk" },
        { title: "Jack D. Schwager - Stock Market Wizards", url: "https://drive.google.com/file/d/1nkzjSR3MYnJ2GFnP6GCahdpesSkKItfN/view?usp=drivesdk" },
        { title: "Jack D. Schwager - The Little Book of Market Wizards", url: "https://drive.google.com/file/d/15lXlKvk9-Cp2Ue7uoNOAhv5Cq_9_juq1/view?usp=drivesdk" },
        { title: "Jack D. Schwager - Unknown Market Wizards", url: "https://drive.google.com/file/d/1xWbHdYRtFiabfwZC68GLntm3KY5S4WiN/view?usp=drivesdk" },
        { title: "James Altucher - Trade Like Warren Buffett", url: "https://drive.google.com/file/d/1b4Eisc6JdVxzv-VSDTS5AVYt_gGfwbO1/view?usp=drivesdk" }
    ]
};

// Helper function to get all books as a flat array (for "All Books" category)
function getAllBooks() {
    const allBooks = [];
    
    // Add BSIT books (which are in folders)
    for (const folderName in booksDB["BSIT"]) {
        const folderBooks = booksDB["BSIT"][folderName];
        if (Array.isArray(folderBooks)) {
            allBooks.push(...folderBooks);
        }
    }
    
    // Add BSIT (GenEd) books
    if (Array.isArray(booksDB["BSIT (GenEd)"])) {
        allBooks.push(...booksDB["BSIT (GenEd)"]);
    }
    
    // Add Stocks, Trading, & Investment books
    if (Array.isArray(booksDB["Stocks, Trading, & Investment"])) {
        allBooks.push(...booksDB["Stocks, Trading, & Investment"]);
    }
    
    return allBooks;
}

// Helper function to get folders for a category
function getFolders(category) {
    const categoryData = booksDB[category];
    if (categoryData && typeof categoryData === 'object' && !Array.isArray(categoryData)) {
        return Object.keys(categoryData);
    }
    return null;
}

// Helper function to get books in a folder
function getBooksInFolder(category, folder) {
    const categoryData = booksDB[category];
    if (categoryData && typeof categoryData === 'object' && !Array.isArray(categoryData)) {
        const folderBooks = categoryData[folder];
        if (Array.isArray(folderBooks)) {
            return folderBooks;
        }
    }
    return [];
}

// Helper function to check if a category has folders (nested structure)
function hasFolders(category) {
    const categoryData = booksDB[category];
    return categoryData && typeof categoryData === 'object' && !Array.isArray(categoryData);
}

// Helper function to check if a category has direct books (array)
function hasDirectBooks(category) {
    const categoryData = booksDB[category];
    return categoryData && Array.isArray(categoryData);
}

// Create the "All Books" category by combining all books
const allBooksArray = getAllBooks();
booksDB["All Books"] = allBooksArray;