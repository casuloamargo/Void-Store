<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Void Store</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: url("https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat fixed;
            color: white;
        }

        .header {
            padding: 20px;
            text-align: center;
            background: rgba(0, 0, 0, 0.6);
            font-size: 2.4rem;
            font-weight: bold;
            letter-spacing: 2px;
        }

        .sub {
            text-align: center;
            margin-top: -10px;
            font-size: 1.1rem;
            opacity: 0.85;
        }

        .store {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 30px;
            gap: 25px;
        }

        .card {
            background: rgba(0, 0, 0, 0.7);
            width: 260px;
            padding: 15px;
            border-radius: 15px;
            backdrop-filter: blur(4px);
            text-align: center;
            transition: 0.3s;
        }

        .card:hover {
            transform: scale(1.05);
        }

        .card img {
            width: 100%;
            height: 160px;
            border-radius: 12px;
            object-fit: cover;
        }

        .card-title {
            font-size: 1.3rem;
            margin-top: 10px;
            font-weight: bold;
        }

        .buy-btn {
            margin-top: 12px;
            display: inline-block;
            background: #6b00ff;
            padding: 10px 20px;
            border-radius: 10px;
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: 0.2s;
        }

        .buy-btn:hover {
            background: #8a2eff;
        }
    </style>
</head>
<body>

    <div class="header">VOID STORE</div>
    <div class="sub">Here at Void you get everything for Roblox — Brainrot, PvB, Grow a Garden & Blox Fruits.</div>

    <div class="store">

        <!-- CARD 1 -->
        <div class="card">
            <img src="https://via.placeholder.com/300x160?text=Brainrot" alt="Brainrot">
            <div class="card-title">Brainrot Pack</div>
            <a class="buy-btn" href="#">Buy</a>
        </div>

        <!-- CARD 2 -->
        <div class="card">
            <img src="https://via.placeholder.com/300x160?text=Plants+vs+Brainrots" alt="PvB">
            <div class="card-title">Plants vs Brainrots</div>
            <a class="buy-btn" href="#">Buy</a>
        </div>

        <!-- CARD 3 -->
        <div class="card">
            <img src="https://via.placeholder.com/300x160?text=Grow+a+Garden" alt="Garden">
            <div class="card-title">Grow a Garden Items</div>
            <a class="buy-btn" href="#">Buy</a>
        </div>

        <!-- CARD 4 -->
        <div class="card">
            <img src="https://via.placeholder.com/300x160?text=Blox+Fruits" alt="Blox Fruits">
            <div class="card-title">Blox Fruits Items</div>
            <a class="buy-btn" href="#">Buy</a>
        </div>

    </div>

</body>
</html>
