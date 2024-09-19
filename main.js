<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css" integrity="sha384-q94+BZtLrkL1/ohfjR8c6L+A6qzNH9R2hBLwyoAfu3i/WCvQjzL2RQJ3uNHDISdU" crossorigin="anonymous">
  <title>ChessDB Mobile</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: monospace;
    }

    body {
      background-color: #000;
      color: #fff;
      font-size: 0.8em;
      margin: 0;
      padding: 0;
    }

    #board {
      width: 95vw;
      touch-action: none;
      box-sizing: content-box;
      margin: 2vw;
    }

    .white-1e1d7 {
      background-color: #064;
    }

    .black-3c85d {
      background-color: #bbb;
    }

    .move-list-container {
      flex: 1;
      margin-left: 2vw;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      max-height: 30vw;
    }

    .move-list {
      width: 95vw;
      padding-left: 2vw;
      overflow-y: auto;
    }

    #query-info-container {
      border-right: 1px solid #000;
    }

    .form-container {
      margin-top: 2px;
      white-space: nowrap;
      display: inline-block;
      margin-right: 2vw;
    }

    #queryinfo {
      text-align: center;
    }

    #metadata-container {
      white-space: nowrap;
      margin-left: 2vw;
    }

    .metadata {
      display: inline-block;
      margin-right: 1vw;
    }
  </style>
</head>
<body>
  <div id="board"></div>
  </div>
  <div id="query-info-container" class="move-list-container">
    <div id="query-info" class="move-list"></div>
    <div class="form-container">
      <select id="white-sort-options" style="width: 40vw;">
        <option value="" disabled>Sort White's moves by...</option>
        <option value="accuracy" selected>accuracy</option>
        <option value="popularity">popularity</option>
        <option value="winrate">winrate</option>
      </select>
      <select id="black-sort-options" style="width: 40vw;">
        <option value="" disabled>Sort Black's moves by...</option>
        <option value="accuracy" selected>accuracy</option>
        <option value="popularity">popularity</option>
        <option value="winrate">winrate</option>
      </select>
    </div>
  </div>
  <div id="metadata-container">
    <button id="go-back"><</button>
    <p id="status-display" class="metadata"></p>
    <a style="margin-left: 2vw" id="lichess" class="metadata" target="_blank" href="https://lichess.org/analysis/fromPosition/rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR%20w%20KQkq%20-%200%201"></a>
    <input type="checkbox" id="masters" class="metadata">
    <button id="pgn">Copy PGN</button>
  </div>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha384-ZvpUoO/+PpLXR1lu4jmpXWu80pZlYUAfxl5NsBMWOEPSjUn/6Z/hRTt8+pR6L4N2" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js"></script>
  <script src="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js" integrity="sha384-8Vi8VHwn3vjQ9eUHUxex3JSN/NFqUg3QbPyX8kWyb93+8AC/pPWTzj+nHtbC5bxD" crossorigin="anonymous"></script>
  <script src="main.js"></script>
</body>
</html>
