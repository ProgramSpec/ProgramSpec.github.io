const Players = [
    {"Name":"陈子龙","Score":0},
    {"Name":"成雨航","Score":0},
    {"Name":"掇铎"  ,"Score":0},
    {"Name":"关熙艾","Score":0},
    {"Name":"姜明萱","Score":0},
    {"Name":"柳懿轩","Score":0},
    {"Name":"李梓熙","Score":0},
    {"Name":"李程琳","Score":0},
    {"Name":"李梓源","Score":0},
    {"Name":"刘景汐","Score":0},
    {"Name":"刘翰霖","Score":0},
    {"Name":"李天确","Score":0},
    {"Name":"李泳贤","Score":0},
    {"Name":"芦雅昀","Score":0},
    {"Name":"牛烁程","Score":0},
    {"Name":"彭丽旗","Score":0},
    {"Name":"戚牧辰","Score":0},
    {"Name":"任颖晗","Score":0},
    {"Name":"孙正宜","Score":0},
    {"Name":"孙嘉骏","Score":0},
    {"Name":"沈熹垣","Score":0},
    {"Name":"魏久尊","Score":0},
    {"Name":"王雅菡","Score":0},
    {"Name":"王子钧","Score":0},
    {"Name":"薛贺成","Score":0},
    {"Name":"薛佑承","Score":0},
    {"Name":"希思杨","Score":0},
    {"Name":"杨嘉盈","Score":0},
    {"Name":"于艾洋","Score":0},
    {"Name":"喻晨翔","Score":0},
    {"Name":"张筱绮","Score":0},
    {"Name":"张鑫煜","Score":0},
    {"Name":"张腾逸","Score":0},
    {"Name":"张睿昕","Score":0}
];

function getAllPlayerScores() {
    const savedScores = JSON.parse(localStorage.getItem('playerScores')) || {};
    return Players.map(player => ({
        name: player.Name,
        score: savedScores[player.Name] || 0
    }));
}

function renderRanking() {
    const rankingElement = document.querySelector('.Ranking');
    const sortedPlayers = getAllPlayerScores()
        .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name)); 
    rankingElement.innerHTML = '';
    sortedPlayers.forEach((player, index) => {
        const playerElement = document.createElement('p');
        playerElement.id = `Player${index + 1}`;
        playerElement.className = 'ranking-item';
        playerElement.innerHTML = `
            <span class="rank">${index + 1}.</span>
            <span class="name">${player.name}</span>
            <span class="score">${player.score}分</span>
        `;
        rankingElement.appendChild(playerElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const pageTransition = document.querySelector('.page-transition');
    // 页面加载完成时添加 active 类，实现淡入效果
    setTimeout(() => {
        pageTransition.classList.add('active');
    }, 100);

    if(localStorage.getItem('IsNewPlayer') === null) {
        localStorage.setItem('IsNewPlayer', 'Yes');
        alert("AUU，是哪个小可爱把数据给清了呀？");
        const initialScores = {};
        Players.forEach(player => {
            initialScores[player.Name] = player.Score;
        });
        localStorage.setItem('playerScores', JSON.stringify(initialScores));
    }

    document.getElementById('ClearData').addEventListener('click', function() {
        localStorage.removeItem('IsNewPlayer');
        localStorage.removeItem('playerScores');
        alert("AUU，你想过那些分高的同学他们的感受吗？");
    });

    const helpElement = document.querySelector('.help');
    const rankingElement = document.querySelector('.Ranking');
    let activePanel = null;

    function togglePanel(panel) {
        if (activePanel === panel) {
            panel.classList.remove('active');
            activePanel = null;
        } else {
            if (activePanel) activePanel.classList.remove('active');
            panel.classList.add('active');
            activePanel = panel;
            if (panel === rankingElement) {
                renderRanking();
            }
        }
    }

    function Goto(format) {
        // 移除 active 类，实现淡出效果
        pageTransition.classList.remove('active');
        setTimeout(() => {
            switch (format) {
                case 1:
                    window.location.href = "Games/Game3x3/Settings/Game3x3.html";
                    break;
                case 2:
                    window.location.href = "Games/Game5x5/Settings/Game5x5.html";
                    break;
                case 3:
                    window.location.href = "Games/Game7x7/Settings/Game7x7.html";
                    break;
            }
        }, 500);
    }

    document.getElementById('Help').addEventListener('click', () => togglePanel(helpElement));
    document.getElementById('Ranking').addEventListener('click', () => togglePanel(rankingElement));
    document.getElementById('CBegin1').addEventListener('click',() =>Goto(1));
    document.getElementById('CBegin2').addEventListener('click',() =>Goto(2));
    document.getElementById('CBegin3').addEventListener('click',() =>Goto(3));
});