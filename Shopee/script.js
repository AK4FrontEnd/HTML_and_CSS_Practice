//禁用滑鼠右鍵
function forbidRightMouse(evt)
{
    if (evt)
        evt.preventDefault();               //dom2的事件模型，主要針對firefox/sofari
    else
        window.event.returnValue = false;   //IE的事件模型

    alert('君翰好帥')
}

document.oncontextmenu = forbidRightMouse;//防止遊覽者使用滑鼠右鍵