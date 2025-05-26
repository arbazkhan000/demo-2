export const categories = [
    {
        id: "1",
        name: "Web Development",
        coursesCount: 12,
        icon: "🌐",
    },
    {
        id: "2",
        name: "Data Science",
        coursesCount: 8,
        icon: "📊",
    },
    {
        id: "3",
        name: "Mobile Development",
        coursesCount: 6,
        icon: "📱",
    },
    {
        id: "4",
        name: "UI/UX Design",
        coursesCount: 5,
        icon: "🎨",
    },
    {
        id: "5",
        name: "Machine Learning",
        coursesCount: 7,
        icon: "🤖",
    },
    {
        id: "6",
        name: "Business",
        coursesCount: 10,
        icon: "💼",
    },
];

export const courses = [
    {
        id: "1",
        title: "Complete Web Development Bootcamp",
        description:
            "Become a full-stack web developer with this comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
        instructor: "Sarah Johnson",

        price: 99.99,
        discountPrice: 84.99,
        category: "Web Development",
        level: "Beginner",
        thumbnail:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        duration: "48 hours",
        lessonsCount: 124,
        featured: true,
        enrolledStudents: 12420,
        createdAt: "2023-01-15",
        updatedAt: "2023-05-20",
        curriculum: [
            {
                title: "Introduction to Web Development",
                items: [
                    {
                        title: "Course Overview",
                        duration: "5:00",
                        type: "video",
                        preview: true,
                    },
                    {
                        title: "Setting Up Your Development Environment",
                        duration: "15:00",
                        type: "video",
                    },
                    {
                        title: "Web Development Basics Quiz",
                        duration: "10:00",
                        type: "quiz",
                    },
                ],
            },
            {
                title: "HTML Fundamentals",
                items: [
                    {
                        title: "HTML Document Structure",
                        duration: "12:00",
                        type: "video",
                        preview: true,
                    },
                    {
                        title: "Working with Text Elements",
                        duration: "18:00",
                        type: "video",
                    },
                    {
                        title: "HTML Forms and Inputs",
                        duration: "25:00",
                        type: "video",
                    },
                    {
                        title: "HTML Project",
                        duration: "30:00",
                        type: "assignment",
                    },
                ],
            },
            {
                title: "CSS Styling",
                items: [
                    {
                        title: "CSS Selectors and Properties",
                        duration: "20:00",
                        type: "video",
                    },
                    {
                        title: "Box Model and Layout",
                        duration: "22:00",
                        type: "video",
                    },
                    {
                        title: "Responsive Design with CSS",
                        duration: "28:00",
                        type: "video",
                    },
                    {
                        title: "CSS Styling Quiz",
                        duration: "15:00",
                        type: "quiz",
                    },
                ],
            },
        ],
    },
    {
        id: "2",
        title: "Data Science: Python for Data Analysis",
        description:
            "Learn how to analyze data using Python libraries like Pandas, NumPy, and Matplotlib in this comprehensive data science course.",
        instructor: "Michael Chen",
        rating: 4.7,
        ratingCount: 3821,
        price: 89.99,
        discountPrice: 74.99,
        category: "Data Science",
        level: "Intermediate",
        thumbnail:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        duration: "36 hours",
        lessonsCount: 98,
        featured: true,
        enrolledStudents: 9845,
        createdAt: "2023-02-18",
        updatedAt: "2023-06-12",
        curriculum: [
            {
                title: "Introduction to Data Science",
                items: [
                    {
                        title: "What is Data Science?",
                        duration: "8:00",
                        type: "video",
                        preview: true,
                    },
                    {
                        title: "Setting Up Python for Data Analysis",
                        duration: "12:00",
                        type: "video",
                    },
                    {
                        title: "Basic Python for Data Scientists",
                        duration: "25:00",
                        type: "video",
                    },
                ],
            },
            {
                title: "Working with Pandas",
                items: [
                    {
                        title: "Introduction to Pandas",
                        duration: "15:00",
                        type: "video",
                        preview: true,
                    },
                    {
                        title: "Data Cleaning and Preprocessing",
                        duration: "22:00",
                        type: "video",
                    },
                    {
                        title: "Data Filtering and Transformation",
                        duration: "20:00",
                        type: "video",
                    },
                    {
                        title: "Pandas Exercise",
                        duration: "30:00",
                        type: "assignment",
                    },
                ],
            },
        ],
    },
    {
        id: "3",
        title: "Flutter Mobile App Development",
        description:
            "Create beautiful native mobile applications for iOS and Android using Flutter and Dart programming language.",
        instructor: "Emily Zhang",
        rating: 4.9,
        ratingCount: 2945,
        price: 94.99,
        discountPrice: 79.99,
        category: "Mobile Development",
        level: "Intermediate",
        thumbnail:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        duration: "32 hours",
        lessonsCount: 85,
        featured: true,
        enrolledStudents: 7632,
        createdAt: "2023-03-10",
        updatedAt: "2023-07-05",
        curriculum: [
            {
                title: "Introduction to Flutter",
                items: [
                    {
                        title: "What is Flutter?",
                        duration: "6:00",
                        type: "video",
                        preview: true,
                    },
                    {
                        title: "Setting Up Flutter Development Environment",
                        duration: "15:00",
                        type: "video",
                    },
                    {
                        title: "Dart Programming Basics",
                        duration: "25:00",
                        type: "video",
                    },
                ],
            },
            {
                title: "Building User Interfaces",
                items: [
                    {
                        title: "Flutter Widgets Overview",
                        duration: "18:00",
                        type: "video",
                    },
                    {
                        title: "Layouts and Constraints",
                        duration: "22:00",
                        type: "video",
                    },
                    {
                        title: "Building a Simple App Interface",
                        duration: "30:00",
                        type: "assignment",
                    },
                ],
            },
        ],
    },
    {
        id: "4",
        title: "UI/UX Design Principles",
        description:
            "Master the principles of user interface and user experience design to create beautiful and functional digital products.",
        instructor: "David Wilson",
        rating: 4.6,
        ratingCount: 2158,
        price: 79.99,
        discountPrice: 69.99,
        category: "UI/UX Design",
        level: "Beginner",
        thumbnail:
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        duration: "28 hours",
        lessonsCount: 72,
        featured: false,
        enrolledStudents: 5982,
        createdAt: "2023-04-05",
        updatedAt: "2023-08-15",
        curriculum: [
            {
                title: "Introduction to UI/UX",
                items: [
                    {
                        title: "Understanding UI vs UX",
                        duration: "10:00",
                        type: "video",
                        preview: true,
                    },
                    {
                        title: "The Design Process",
                        duration: "15:00",
                        type: "video",
                    },
                    {
                        title: "User Research Fundamentals",
                        duration: "20:00",
                        type: "video",
                    },
                ],
            },
            {
                title: "UI Design Fundamentals",
                items: [
                    {
                        title: "Color Theory for Digital Products",
                        duration: "18:00",
                        type: "video",
                    },
                    {
                        title: "Typography in UI Design",
                        duration: "15:00",
                        type: "video",
                    },
                    {
                        title: "Layout and Visual Hierarchy",
                        duration: "22:00",
                        type: "video",
                    },
                    {
                        title: "Design Challenge 1",
                        duration: "45:00",
                        type: "assignment",
                    },
                ],
            },
        ],
    },
    {
        id: "5",
        title: "Introduction to Machine Learning",
        description:
            "Learn the fundamentals of machine learning algorithms, models, and practical applications with Python.",
        instructor: "Alex Rodriguez",
        rating: 4.7,
        ratingCount: 3210,
        price: 94.99,
        discountPrice: null,
        category: "Machine Learning",
        level: "Advanced",
        thumbnail:
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        duration: "40 hours",
        lessonsCount: 105,
        featured: false,
        enrolledStudents: 8432,
        createdAt: "2023-02-28",
        updatedAt: "2023-07-22",
        curriculum: [
            {
                title: "Machine Learning Basics",
                items: [
                    {
                        title: "What is Machine Learning?",
                        duration: "12:00",
                        type: "video",
                        preview: true,
                    },
                    {
                        title: "Types of Machine Learning",
                        duration: "18:00",
                        type: "video",
                    },
                    {
                        title: "Setting Up Python for ML",
                        duration: "15:00",
                        type: "video",
                    },
                ],
            },
            {
                title: "Supervised Learning",
                items: [
                    {
                        title: "Linear Regression",
                        duration: "22:00",
                        type: "video",
                    },
                    {
                        title: "Classification Algorithms",
                        duration: "25:00",
                        type: "video",
                    },
                    {
                        title: "Model Evaluation",
                        duration: "18:00",
                        type: "video",
                    },
                    {
                        title: "Supervised Learning Project",
                        duration: "60:00",
                        type: "assignment",
                    },
                ],
            },
        ],
    },
    {
        id: "6",
        title: "Business Strategy Fundamentals",
        description:
            "Develop essential business strategy skills to drive organizational growth and competitive advantage.",
        instructor: "Jennifer Martinez",
        rating: 4.5,
        ratingCount: 1876,
        price: 69.99,
        discountPrice: 59.99,
        category: "Business",
        level: "Beginner",
        thumbnail:
            "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        duration: "24 hours",
        lessonsCount: 65,
        featured: false,
        enrolledStudents: 4521,
        createdAt: "2023-05-12",
        updatedAt: "2023-08-30",
        curriculum: [
            {
                title: "Introduction to Business Strategy",
                items: [
                    {
                        title: "What is Business Strategy?",
                        duration: "10:00",
                        type: "video",
                        preview: true,
                    },
                    {
                        title: "Strategic Management Process",
                        duration: "15:00",
                        type: "video",
                    },
                    {
                        title: "Industry Analysis",
                        duration: "18:00",
                        type: "video",
                    },
                ],
            },
            {
                title: "Competitive Advantage",
                items: [
                    {
                        title: "Sources of Competitive Advantage",
                        duration: "20:00",
                        type: "video",
                    },
                    {
                        title: "Value Chain Analysis",
                        duration: "18:00",
                        type: "video",
                    },
                    {
                        title: "Business Model Innovation",
                        duration: "22:00",
                        type: "video",
                    },
                    {
                        title: "Strategy Case Study",
                        duration: "45:00",
                        type: "assignment",
                    },
                ],
            },
        ],
    },
];

const WHY_CHOOSE_US = [
    {
        id: "1",
        name: "Expert Instructors",
        description:
            "Learn from industry professionals with real-world experience.",
        icon: "💼",
    },
];
