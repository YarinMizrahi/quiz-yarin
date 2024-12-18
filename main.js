// הגדרת השאלות בכל נושא
const topics = {
    history: [
        { question: "מהי הבירה של ישראל?", options: ["תל אביב", "ירושלים", "חיפה", "באר שבע"], correct: "ירושלים" },
        { question: "מי היה ראש ממשלת ישראל הראשון?", options: ["משה דיין", "יצחק רבין", "דוד בן-גוריון", "שמעון פרס"], correct: "דוד בן-גוריון" },
        { question: "מהי שפת התכנות הנפוצה ביותר כיום?", options: ["Java", "Python", "JavaScript", "C++"], correct: "JavaScript" },
        { question: "מי המציא את הטלפון?", options: ["תומס אדיסון", "אלכסנדר גרהם בל", "מארק צוקרברג", "סטיב ג'ובס"], correct: "אלכסנדר גרהם בל" },
        { question: "מהו המספר הגדול ביותר?", options: ["∞", "100", "1000", "999"], correct: "∞" },
        { question: "מי היה המנהיג של בריטניה במהלך מלחמת העולם השנייה?", options: ["וינסטון צ'רצ'יל", "אדולף היטלר", "פרנקלין רוזוולט", "חוסיין מלכום"], correct: "וינסטון צ'רצ'יל" },
        { question: "איזו מהמדינות הייתה הראשונה שהעניקה זכויות הצבעה לנשים?", options: ["ניו זילנד", "בריטניה", "ארצות הברית", "הולנד"], correct: "ניו זילנד" },
        { question: "איזו אומה גילתה את אמריקה בשנת 1492?", options: ["ההולנדים", "הפולנים", "הפורטוגלים", "הספרדים"], correct: "הספרדים" },
        { question: "מי היה נשיאה של ארצות הברית בזמן מלחמת העולם השנייה?", options: ["הארי טרומן", "פרנקלין דלאנו רוזוולט", "לינדון ג'ונסון", "ריצ'רד ניקסון"], correct: "פרנקלין דלאנו רוזוולט" },
        { question: "מהי השנה בה התרחש השואה?", options: ["1945", "1939", "1941", "1942"], correct: "1941" },
        { question: "מי היה המנהיג של הרייך השלישי?", options: ["אדולף היטלר", "בניטו מוסוליני", "וינסטון צ'רצ'יל", "היירהימר"], correct: "אדולף היטלר" }
    ],
    science: [
        { question: "מהי הפיזיקה?", options: ["תורת השדות", "חקר חומר ואנרגיה", "הבנת גופים", "הנדסה"], correct: "חקר חומר ואנרגיה" },
        { question: "מהו האטום?", options: ["חלקיק", "אור", "חומר", "קול"], correct: "חלקיק" },
        { question: "מהי תרמודינמיקה?", options: ["חקר חום ומעבר חום", "חקר תנועת גופים", "חקר רכיבי האטום", "חקר צבעים"], correct: "חקר חום ומעבר חום" },
        { question: "מהו החומר שממנו עשוי כל גוף?", options: ["אטום", "חלבון", "מים", "אוויר"], correct: "אטום" },
        { question: "מהו הגורם לחומציות במים?", options: ["חומצה", "בסיס", "מגנזיום", "חמצן"], correct: "חומצה" },
        { question: "מהו החוק הראשון של ניוטון?", options: ["חוק ההתמדה", "חוק הכבידה", "חוק התנועה", "חוק המשיכה"], correct: "חוק ההתמדה" },
        { question: "מהי קרינת רנטגן?", options: ["קרינה אלקטרומגנטית", "חומר אורגני", "חומר בלתי נראה", "חומר פלואורסצנטי"], correct: "קרינה אלקטרומגנטית" },
        { question: "מהו הפוטון?", options: ["חלקיק אור", "חלקיק חשמל", "חלקיק גז", "חלקיק מים"], correct: "חלקיק אור" },
        { question: "מהו חלקיק היסוד של חשמל?", options: ["אלקטרון", "פרוטון", "נויטרון", "פוטון"], correct: "אלקטרון" },
        { question: "מהו תהליך הפוטוסינתזה?", options: ["תהליך הפקת חמצן מצמחייה", "תהליך הפקת אנרגיה מצמחייה", "תהליך חלוקת תאים", "תהליך חילוף חומרים"], correct: "תהליך הפקת אנרגיה מצמחייה" },
        { question: "מהו שמו של הכימאי שגילה את טבלת האלמנטים?", options: ["מנדלייב", "הוק", "איינשטין", "ניוטון"], correct: "מנדלייב" },
        { question: "מהו הקטליזטור?", options: ["חומר שמאיץ תגובות כימיות", "חומר שמפחית את המהירות", "חומר שמהווה מקור לאנרגיה", "חומר שתומך בצמיחה"], correct: "חומר שמאיץ תגובות כימיות" },
    ],
    
    
    geography: [
        { question: "מהי בירת ישראל?", options: ["תל אביב", "ירושלים", "חיפה", "עכו"], correct: "ירושלים" },
        { question: "איזה ים נמצא ליד ישראל?", options: ["ים המלח", "ים סוף", "ים האדום", "הים התיכון"], correct: "הים התיכון" },
        { question: "מהו ההר הגבוה ביותר בישראל?", options: ["הר הכרמל", "הר תבור", "הר בנטל", "הר החרמון"], correct: "הר החרמון" },
        { question: "איזה נהר עובר בישראל?", options: ["הירדן", "הנילוס", "הדנובה", "האמזונס"], correct: "הירדן" },
        { question: "מהו האי הגדול ביותר במזרח התיכון?", options: ["אי קפריסין", "אי סיציליה", "אי ג'רבה", "אי מאוריציוס"], correct: "אי קפריסין" },
        { question: "אילו מדינות גובלות בישראל?", options: ["מצרים, ירדן, סוריה, לבנון", "ירדן, עיראק, סוריה, מצרים", "לבנון, עיראק, קפריסין, ירדן", "סוריה, עיראק, קפריסין, טורקיה"], correct: "מצרים, ירדן, סוריה, לבנון" },
        { question: "מהי העיר הגדולה ביותר בישראל?", options: ["תל אביב", "חיפה", "ירושלים", "נתניה"], correct: "תל אביב" },
        { question: "איזה מדבר נמצא בדרום ישראל?", options: ["המדבר הסהרה", "המדבר הערבי", "הנגב", "המדבר הגובי"], correct: "הנגב" },
        { question: "מהו הים העמוק ביותר בישראל?", options: ["ים המלח", "הים התיכון", "ים סוף", "הים האדום"], correct: "ים המלח" },
        { question: "מהו החוף הארוך ביותר בישראל?", options: ["חוף תל אביב", "חוף אילת", "חוף עכו", "חוף הכרמל"], correct: "חוף תל אביב" },
        { question: "איזה מדבר נמצא בצפון מזרח ישראל?", options: ["מדבר יהודה", "הנגב", "המדבר הערבי", "המדבר הסהרה"], correct: "מדבר יהודה" }
    ],
    
    technology: [
        { question: "מי המציא את המחשב?", options: ["צ'אק שונאר", "אלן טיורינג", "סטיב ג'ובס", "ביל גייטס"], correct: "אלן טיורינג" },
        { question: "מהי מערכת ההפעלה הפופולרית ביותר?", options: ["Linux", "Windows", "macOS", "Android"], correct: "Windows" },
        { question: "מהו מחשב לוח?", options: ["מחשב נישא", "טלפון חכם", "מחשב אישי עם מסך מגע", "מחשב עם מקלדת נפרדת"], correct: "מחשב אישי עם מסך מגע" },
        { question: "מהו החיבור המהיר ביותר כיום להעברת נתונים?", options: ["USB 2.0", "USB 3.0", "Thunderbolt", "Bluetooth"], correct: "Thunderbolt" },
        { question: "מהי שפת תכנות פופולרית לפיתוח אתרים?", options: ["C++", "Python", "JavaScript", "Swift"], correct: "JavaScript" },
        { question: "מהו רובוט?", options: ["מכונה אוטומטית המורכבת מעשרות חלקים", "מכונה שנראית כמו אדם או בעל חיים", "מחשב חכם שמבצע משימות", "מכונה לפיקוח על נתונים"], correct: "מחשב חכם שמבצע משימות" },
        { question: "איזה מוצר שייך לסטיב ג'ובס?", options: ["Android", "iPhone", "Windows", "PlayStation"], correct: "iPhone" },
        { question: "מהו מדפסת תלת ממד?", options: ["מכשיר להדפסת תמונות", "מכשיר להדפסת אובייקטים תלת ממדיים", "מכשיר להדפסת דפים", "מכשיר לשימוש אישי בבית"], correct: "מכשיר להדפסת אובייקטים תלת ממדיים" },
        { question: "מהי האינטרנט של הדברים (IoT)?", options: ["חיבור בין מחשבים למערכות פנימיות", "חיבור בין חפצים לאינטרנט", "חיבור בין אנשים במדיה חברתית", "מערכת תוכנה לניהול מחשבים"], correct: "חיבור בין חפצים לאינטרנט" },
        { question: "איזה חברת טכנולוגיה יצרה את ה-Android?", options: ["Apple", "Microsoft", "Google", "Samsung"], correct: "Google" }
    ],
    
};

let currentQuestionIndex = 0;
let score = 0;
let selectedTopic = "";

// Start the quiz with the selected topic
// Start the quiz with the selected topic
// Start the quiz with the selected topic
function startQuiz(topic) {
    selectedTopic = topic;
    console.log("Selected topic:", selectedTopic); // Debugging line
    
    // Ensure selectedTopic exists in the topics object
    if (!topics[selectedTopic]) {
        console.error("Invalid topic selected:", selectedTopic);
        return; // Exit if the topic is invalid
    }
    
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score-value").innerText = score;
    
    document.getElementById("topics-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    
    displayQuestion();
}

// Display the current question
function displayQuestion() {
    if (!topics[selectedTopic]) {
        console.error("Selected topic does not exist:", selectedTopic);
        return;
    }

    const question = topics[selectedTopic][currentQuestionIndex];
    if (!question) {
        console.error("No question available for index:", currentQuestionIndex);
        return;
    }

    // Display the question
    document.getElementById("question").innerText = `שאלה ${currentQuestionIndex + 1}: ${question.question}`;
    
    // Create the options buttons
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    // Hide feedback and next button initially
    document.getElementById("feedback-message").innerText = "";
    document.getElementById("next-btn").style.display = "none";
}

// Check the answer when an option is selected
function checkAnswer(selectedOption) {
    const question = topics[selectedTopic][currentQuestionIndex];
    const correctAnswer = question.correct;

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("feedback-message").innerText = "תשובה נכונה!";
    } else {
        document.getElementById("feedback-message").innerText = `תשובה לא נכונה! התשובה הנכונה היא: ${correctAnswer}`;
    }

    document.getElementById("score-value").innerText = score;
    currentQuestionIndex++;

    if (currentQuestionIndex < topics[selectedTopic].length) {
        document.getElementById("next-btn").style.display = "block";
    } else {
        endQuiz();
    }
}

// Go to the next question
function nextQuestion() {
    displayQuestion();
}

// End the quiz and display the result
function endQuiz() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    showResult('סיימת את המבחן בהצלחה!');
}

function showResult(message) {
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');

    // עדכון ההודעה בתוכן
    resultMessage.textContent = message;

    // הצגת הקופסה
    resultContainer.style.display = 'flex';
}

