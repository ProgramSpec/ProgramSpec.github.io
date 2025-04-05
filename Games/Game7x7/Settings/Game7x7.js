window.addEventListener('load', function () {
    const pageTransition = document.querySelector('.page-transition');
    if (pageTransition) {
        pageTransition.classList.add('active');
    }

    const selectPlayer1 = document.getElementById('CPlayer1');
    const selectPlayer2 = document.getElementById('CPlayer2');
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function () {
        window.location.href = '../../../贪吃蛇.html';
    });

    const Players = [
        { "Name": "陈子龙", "Score": 0 },
        { "Name": "成雨航", "Score": 0 },
        { "Name": "掇铎", "Score": 0 },
        { "Name": "关熙艾", "Score": 0 },
        { "Name": "姜明萱", "Score": 0 },
        { "Name": "柳懿轩", "Score": 0 },
        { "Name": "李梓熙", "Score": 0 },
        { "Name": "李程琳", "Score": 0 },
        { "Name": "李梓源", "Score": 0 },
        { "Name": "刘景汐", "Score": 0 },
        { "Name": "刘翰霖", "Score": 0 },
        { "Name": "李天确", "Score": 0 },
        { "Name": "李泳贤", "Score": 0 },
        { "Name": "芦雅昀", "Score": 0 },
        { "Name": "牛烁程", "Score": 0 },
        { "Name": "彭丽旗", "Score": 0 },
        { "Name": "戚牧辰", "Score": 0 },
        { "Name": "任颖晗", "Score": 0 },
        { "Name": "孙正宜", "Score": 0 },
        { "Name": "孙嘉骏", "Score": 0 },
        { "Name": "沈熹垣", "Score": 0 },
        { "Name": "魏久尊", "Score": 0 },
        { "Name": "王雅菡", "Score": 0 },
        { "Name": "王子钧", "Score": 0 },
        { "Name": "薛贺成", "Score": 0 },
        { "Name": "薛佑承", "Score": 0 },
        { "Name": "希思杨", "Score": 0 },
        { "Name": "杨嘉盈", "Score": 0 },
        { "Name": "于艾洋", "Score": 0 },
        { "Name": "喻晨翔", "Score": 0 },
        { "Name": "张筱绮", "Score": 0 },
        { "Name": "张鑫煜", "Score": 0 },
        { "Name": "张腾逸", "Score": 0 },
        { "Name": "张睿昕", "Score": 0 }
    ];
    const selectIds = ['CPlayer1', 'CPlayer2', 'CPlayer3', 'CPlayer4', 'CPlayer5'];
    selectIds.forEach(id => {
        const selectElement = document.getElementById(id);
        Players.forEach(player => {
            const option = document.createElement('option');
            option.value = player.Name;
            option.textContent = player.Name;
            selectElement.appendChild(option);
        });
    });

    const inputElement = document.getElementById("MNOP");
    const increaseButton = document.getElementById("increaseButton");
    const decreaseButton = document.getElementById("decreaseButton");

    // 定义一个函数用于检查并更新状态
    function checkAndUpdate() {
        let value = parseInt(inputElement.value, 10);

        // 如果值小于 2，重置为 2
        if (isNaN(value) || value < 2) {
            value = 2;
            inputElement.value = 2;
        }

        selectIds.forEach((id, index) => {
            const selectElement = document.getElementById(id);
            // 根据 value 的值禁用相应的 select 元素
            selectElement.disabled = (index + 1) > value;
        });

        // 根据 value 的值禁用增减按钮
        increaseButton.disabled = value === 5;
        decreaseButton.disabled = value === 2;
    }

    // 增加 MNOP 值的函数
    function increaseMNOP() {
        let value = parseInt(inputElement.value, 10);
        if (value < 5) {
            inputElement.value = value + 1;
            checkAndUpdate();
        }
    }

    // 减少 MNOP 值的函数
    function decreaseMNOP() {
        let value = parseInt(inputElement.value, 10);
        if (value > 2) {
            inputElement.value = value - 1;
            checkAndUpdate();
        }
    }

    // 初始检查
    checkAndUpdate();

    // 监听 input 事件，在用户输入时实时检查
    inputElement.addEventListener('input', checkAndUpdate);

    // 为增加按钮添加点击事件监听器
    increaseButton.addEventListener('click', increaseMNOP);

    // 为减少按钮添加点击事件监听器
    decreaseButton.addEventListener('click', decreaseMNOP);
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