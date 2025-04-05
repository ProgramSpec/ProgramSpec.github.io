window.addEventListener('load', function() {
    const pageTransition = document.querySelector('.page-transition');
    if (pageTransition) {
        pageTransition.classList.add('active');
    }

    const selectPlayer1 = document.getElementById('CPlayer1');
    const selectPlayer2 = document.getElementById('CPlayer2');
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
        window.location.href = '../../../贪吃蛇.html';
    });
    const Players = [{"Name": "陈子龙", "Score": 0},{"Name": "成雨航", "Score": 0},{"Name": "掇铎", "Score": 0},{"Name": "关熙艾", "Score": 0},{"Name": "姜明萱", "Score": 0},{"Name": "柳懿轩", "Score": 0},{"Name": "李梓熙", "Score": 0},{"Name": "李程琳", "Score": 0},{"Name": "李梓源", "Score": 0},{"Name": "刘景汐", "Score": 0},{"Name": "刘翰霖", "Score": 0},{"Name": "李天确", "Score": 0},{"Name": "李泳贤", "Score": 0},{"Name": "芦雅昀", "Score": 0},{"Name": "牛烁程", "Score": 0},{"Name": "彭丽旗", "Score": 0},{"Name": "戚牧辰", "Score": 0},{"Name": "任颖晗", "Score": 0},{"Name": "孙正宜", "Score": 0},{"Name": "孙嘉骏", "Score": 0},{"Name": "沈熹垣", "Score": 0},{"Name": "魏久尊", "Score": 0},{"Name": "王雅菡", "Score": 0},{"Name": "王子钧", "Score": 0},{"Name": "薛贺成", "Score": 0},{"Name": "薛佑承", "Score": 0},{"Name": "希思杨", "Score": 0},{"Name": "杨嘉盈", "Score": 0},{"Name": "于艾洋", "Score": 0},{"Name": "喻晨翔", "Score": 0},{"Name": "张筱绮", "Score": 0},{"Name": "张鑫煜", "Score": 0},{"Name": "张腾逸", "Score": 0},{"Name": "张睿昕", "Score": 0}];
    var selectElement = document.getElementById('CPlayer1');
    Players.forEach(player => {
        const option = document.createElement('option');
        option.value = player.Name;
        option.textContent = player.Name;
        selectElement.appendChild(option);
    });
    selectElement = document.getElementById('CPlayer2');
    Players.forEach(player => {
        const option = document.createElement('option');
        option.value = player.Name;
        option.textContent = player.Name;
        selectElement.appendChild(option);
    });
    selectElement = document.getElementById('CPlayer3');
    Players.forEach(player => {
        const option = document.createElement('option');
        option.value = player.Name;
        option.textContent = player.Name;
        selectElement.appendChild(option);
    });
    selectElement = document.getElementById('CPlayer4');
    Players.forEach(player => {
        const option = document.createElement('option');
        option.value = player.Name;
        option.textContent = player.Name;
        selectElement.appendChild(option);
    });
});

function Begin() {
    const selectPlayer1 = document.getElementById('CPlayer1');
    const selectPlayer2 = document.getElementById('CPlayer2');

    // 获取选中选项的值
    const player1Value = selectPlayer1.value;
    const player2Value = selectPlayer2.value;

    if (player1Value === '' && player2Value === '') {
        alert("新来的同学们？还是重名？！");
        return;
    } else if (player1Value === '' || player2Value === '') {
        alert("新来的同学？");
        return;
    } else if (player1Value === player2Value) {
        alert('咱们班应该没有重名的同学吧');
        return; 
    }
    
}