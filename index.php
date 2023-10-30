<?php
session_start();
if (!isset($_SESSION["user"])) {
    header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Website with Login & Registration</title>
    <link rel="stylesheet" href="style3.css">
    <link rel="stylesheet" href="style1.css">
</head>

<body>
    <main class="main">

        <header>
            <div class="logo-and-title">
                <img src="images/02.png">
                <a style="text-decoration: none" href="index.php">
                    <h2 class="logo">QuizSaytı</h2>
                </a>
            </div>
            <nav class="navigation">
                <a class="fa" href="#">Əsas Səhifə</a>
                <a class="fa" href="#">Haqqında</a>
                <a class="fa" href="#">Xidmətlər</a>
                <a class="fa" href="#">Əlaqə</a>
                <a href="logout.php"><button class="btnLogin-popup">Çıxış</button></a>
            </nav>
        </header>

        <div class="container">
            <section class="quiz-section">
                <div class="quiz-box">
                    <h1>Quiz</h1>
                    <div class="quiz-header">
                        <span></span>
                        <span class="header-score">Skor : 0 / 5</span>
                    </div>

                    <h2 class="question-text">What does HTML stand for?</h2>

                    <div class="option-list">
                        ////////////////////////////////
                    </div>

                    <div class="quiz-footer">
                        <button class="ex">Çıxış</button>
                        <button class="next-btn">Növbəti</button>
                    </div>
                </div>

                <div class="result-box">
                    <h2>Quiz Nəticəsi!</h2>
                    <div class="percentage-container">
                        <div class="circular-progress">
                            <span class="progress-value">0%</span>
                        </div>

                        <span class="score-text">Sənin nəticən 0 / 5</span>
                    </div>

                    <div class="buttons">
                        <button class="tryAgain-btn">Yenidən cəhd et</button>
                        <button class="goHome-btn">Əsas səhifəyə qayıt</button>
                    </div>
                </div>
            </section>



            <section class="home">
                <div class="home-content">
                    <h1>Quiz Veb-Saytı</h1>
                    <p>Bu veb-saytda siz göstərilən proqramlaşdırma dillərindən birini seçib biliklərinizi sınaya bilərsiniz. Uğurlar!!</p>
                    <button class="start-btn">Başla</button>
                </div>
            </section>
        </div>
    </main>
    <div class="popup-info">
        <h2>Bölmələr</h2>

        <div class="btn-group">
            <a href="#" class="info-btn continue-btn">Html</a>
            <a href="#" class="info-btn cpp-btn">C++</a>
            <a href="#" class="info-btn java-btn">Java</a>
            <a href="#" class="info-btn python-btn">Python</a>
            <a href="#" class="info-btn sql-btn">SQL</a>
            <button class="info-btn exit-btn">Çıxış</button>
        </div>
    </div>

    <footer>
        <!-- <h3>Created By Farida Elnur Aysel</h3> -->
    </footer>
    <div class="popup-info">


        <div class="btn-group">
            <a href="#" class="info-btn continue-btn">Html</a>
            <a href="#" class="info-btn cpp-btn">C++</a>
            <a href="#" class="info-btn java-btn">Java</a>
            <a href="#" class="info-btn python-btn">Python</a>
            <a href="#" class="info-btn sql-btn">SQL</a>
            <button class="info-btn exit-btn">Çıxış</button>
        </div>
    </div>
    <script src="js/questions_html.js"></script>
    <script src="js/questions_cpp.js"></script>
    <script src="js/questions_java.js"></script>
    <script src="js/questions_py.js"></script>
    <script src="js/questions_sql.js"></script>

</body>

</html>
