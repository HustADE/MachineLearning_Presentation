// 显示成功提示
function showOKInfo(content) {
    $("#alert").attr("class", "alert alert-success");
    $("#alert-icon").attr("class", "glyphicon glyphicon-ok-circle");
    $("#alert-content").html(content);
    if ($("#alert").css("display") == "none" || $("#alert").css("opacity") == "0") {
        $("#alert").fadeIn(500);
    }
    $("#alert").delay(1000).fadeOut(500);
}

// 显示错误提示
function showErrorInfo(content) {
    $("#alert").attr("class", "alert alert-danger");
    $("#alert-icon").attr("class", "glyphicon glyphicon-remove-circle");
    $("#alert-content").html(content);
    if ($("#alert").css("display") == "none" || $("#alert").css("opacity") == "0") {
        $("#alert").fadeIn(500);
    }
    $("#alert").delay(1000).fadeOut(500);
}

// 检查一个字符串是否为正整数
function isStrPositiveInteger(str) {
    var res = true;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) < '0' || str.charAt(i) > '9') {
            res = false;
            break;
        }
    }
    if (res && parseInt(str) == 0) {
        res = false;
    }
    return res;
}

// 旋转下拉列表右边的小三角
function rotateCaretToggle() {
    var isRotated = $(".caret").hasClass("rotate-caret");
    if (isRotated) {
        $(".caret").removeClass("rotate-caret");
    } else {
        $(".caret").addClass("rotate-caret");
    }
}

// 定义复选按钮的单击行为
function checkboxEvent() {
    $(".checkbox-checked-square").fadeToggle(150);
    // 当“作者多于3人”复选框选中时，作者2和作者3应为必填项
    if ($("#author-more-than-3").val() == "false") {
        $("#author-more-than-3").val("true");
        $("#author-label-2").html("作者2<span class=\"bold-red-font\">(*)</span>");
        $("#author-label-3").html("作者3<span class=\"bold-red-font\">(*)</span>");
    } else {
        $("#author-more-than-3").val("false");
        $("#author-label-2").html("作者2");
        $("#author-label-3").html("作者3");
    }
}

// 取消选中复选按钮
function uncheckedEvent() {
    $(".checkbox-checked-square").fadeOut(150);
    $("#author-more-than-3").val("false");
    $("#author-label-2").html("作者2");
    $("#author-label-3").html("作者3");
}

// 复制到剪贴板
function copyToClipboard() {
    var refResult = $("#result").html().trim();
    if (refResult == "空" || refResult == "") {
        showErrorInfo("请先生成参考文献格式！");
    } else {
        var clipbrd = new ClipboardJS("#copy");
        if (clipbrd != null && refResult != "空" && refResult != "") {
            showOKInfo("已复制到剪贴板！");
        } else {
            showErrorInfo("复制到剪贴板失败！");
        }
        clipbrd.on("success", function(e){
            e.clearSelection();
        });
        clipbrd.on("error", function(e){
            showErrorInfo("复制到剪贴板失败，请按Ctrl+C键复制！");
        }).off("error");
        clipbrd = null;
    }
}

// 分别处理每种文献类型
// 图书
function bookProcess() {
    $(".checkbox").fadeIn(150);
    $("#journal").fadeOut(150);
    $("#proceedings").fadeOut(150);
    $("#patent").fadeOut(150);
    $("#dissertation").fadeOut(150);
    $("#book").delay(150).fadeIn(150);
    $("input").val("");
    $("#book-edition").val("1");
    $("#author-2").removeAttr("placeholder");
    $("#author-3").removeAttr("placeholder");
    $("#author-2").removeAttr("disabled");
    $("#author-3").removeAttr("disabled");
    uncheckedEvent();
    /* 为避免在下拉列表切换时为复选按钮重复绑定click事件，
       在切换时必须先行解绑click事件！*/
    $(".checkbox").unbind("click").click(function(){
        checkboxEvent();
    });
}
// 期刊
function journalProcess() {
    $(".checkbox").fadeIn(150);
    $("#book").fadeOut(150);
    $("#proceedings").fadeOut(150);
    $("#patent").fadeOut(150);
    $("#dissertation").fadeOut(150);
    $("#journal").delay(150).fadeIn(150);
    $("input").val("");
    $("#journal-volume").val("1");
    $("#journal-issue").val("1");
    $("#author-2").removeAttr("placeholder");
    $("#author-3").removeAttr("placeholder");
    $("#author-2").removeAttr("disabled");
    $("#author-3").removeAttr("disabled");
    uncheckedEvent();
    /* 为避免在下拉列表切换时为复选按钮重复绑定click事件，
       在切换时必须先行解绑click事件！*/
    $(".checkbox").unbind("click").click(function(){
        checkboxEvent();
    });
}
// 会议论文集
function proceedingsProcess() {
    $(".checkbox").fadeIn(150);
    $("#book").fadeOut(150);
    $("#journal").fadeOut(150);
    $("#patent").fadeOut(150);
    $("#dissertation").fadeOut(150);
    $("#proceedings").delay(150).fadeIn(150);
    $("input").val("");
    $("#author-2").removeAttr("placeholder");
    $("#author-3").removeAttr("placeholder");
    $("#author-2").removeAttr("disabled");
    $("#author-3").removeAttr("disabled");
    uncheckedEvent();
    /* 为避免在下拉列表切换时为复选按钮重复绑定click事件，
       在切换时必须先行解绑click事件！*/
    $(".checkbox").unbind("click").click(function(){
        checkboxEvent();
    });
}
// 专利
function patentProcess() {
    $(".checkbox").fadeIn(150);
    $("#book").fadeOut(150);
    $("#journal").fadeOut(150);
    $("#proceedings").fadeOut(150);
    $("#dissertation").fadeOut(150);
    $("#patent").delay(150).fadeIn(150);
    $("input").val("");
    $("#author-2").removeAttr("placeholder");
    $("#author-3").removeAttr("placeholder");
    $("#author-2").removeAttr("disabled");
    $("#author-3").removeAttr("disabled");
    uncheckedEvent();
    /* 为避免在下拉列表切换时为复选按钮重复绑定click事件，
       在切换时必须先行解绑click事件！*/
    $(".checkbox").unbind("click").click(function(){
        checkboxEvent();
    });
}
// 学位论文
function dissertationProcess() {
    $("#book").fadeOut(150);
    $("#journal").fadeOut(150);
    $("#proceedings").fadeOut(150);
    $("#patent").fadeOut(150);
    $(".master-dissertation").find(".radio-checked-circle").fadeIn(150);
    $(".phd-dissertation").find(".radio-checked-circle").fadeOut(150);
    $("#master").attr("checked", "checked");
    $("#phd").removeAttr("checked");
    $("#dissertation").delay(150).fadeIn(150);
    $("input").val("");
    // 学位论文只能有1名作者
    $("#author-2").attr("placeholder", "无");
    $("#author-3").attr("placeholder", "无");
    $("#author-2").attr("disabled", "disabled");
    $("#author-3").attr("disabled", "disabled");
    $("#author-label-2").html("作者2");
    $("#author-label-3").html("作者3");
    uncheckedEvent();
    $(".checkbox").unbind("click");
    $(".checkbox").fadeOut(150);
    $("#dissertation-type").val("master");
}

// 主函数
$(function(){

    // 显示所有带data-toggle属性元素的提示信息
    $("[data-toggle='tooltip']").tooltip();

    // 为下拉列表各选项绑定鼠标悬停、移开、按下事件
    $(".options").mouseover(function(){
        // 鼠标悬停
        $(this).css("background-color", "rgb(0, 120, 60)");
        $(this).css("color", "white");
        $(".options").not(this).css("background-color", "white");
        $(".options").not(this).css("color", "black");
    });
    $(".options").mouseout(function(){
        // 鼠标移开
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    });
    $(".options").mousedown(function(){
        // 鼠标按下
        var text = $(this).html();
        $("#selected-ref").html(text);
    });

    // 定义下拉列表按钮的行为
    $("#select-ref-type").click(function(){
        // 单击
        var selectedOption = $("#selected-ref").html();
        for (var i = 0; i < $(".options").length; i++) {
            if ($(".options")[i].innerHTML == selectedOption) {
                $(".options")[i].style.backgroundColor = "rgb(0, 120, 60)";
                $(".options")[i].style.color = "white";
            } else {
                $(".options")[i].style.backgroundColor = "white";
                $(".options")[i].style.color = "black";
            }
        }
        rotateCaretToggle();
        $("ul").slideToggle(300);
    });
    $("#select-ref-type").blur(function(){
        // 失去焦点
        if ($(".caret").hasClass("rotate-caret")) {
            rotateCaretToggle();
        }
        $("ul").slideUp(300);
    });

    // 当下拉列表选中项变化时，显示的必填项也要随之变化
    // 注意此处应为focus事件，而非mouseup事件！
    $(".options").focus(function(){
        var selectedOption = $(this).html();
        if (selectedOption == "图书") {
            bookProcess();
        } else if (selectedOption == "期刊") {
            journalProcess();
        } else if (selectedOption == "会议论文集") {
            proceedingsProcess();
        } else if (selectedOption == "专利") {
            patentProcess();
        } else if (selectedOption == "学位论文") {
            dissertationProcess();
        }
        $("#result").fadeOut(150);
        setTimeout(function(){
            $("#result").html("空");
            $("#result").fadeIn(150);
        }, 150);
    });

    // 设置每种文献的起始页不大于终止页
    $("#book-start-page").change(function(){
        var startPage = $(this).val();
        $("#book-end-page").attr("min", startPage);
    });
    $("#journal-start-page").change(function(){
        var startPage = $(this).val();
        $("#journal-end-page").attr("min", startPage);
    });
    $("#proceedings-start-page").change(function(){
        var startPage = $(this).val();
        $("#proceedings-end-page").attr("min", startPage);
    });
    $("#patent-start-page").change(function(){
        var startPage = $(this).val();
        $("#patent-end-page").attr("min", startPage);
    });

    // 生成参考文献格式
    $("#submit").click(function(){
        // 最终生成的参考文献格式
        var refResult = "";
        // 所有作者
        var allAuthors = "";
        // 首先检查公共必填项(作者、文献题名)
        var author1 = $("#author-1").val().trim();
        var author2 = $("#author-2").val().trim();
        var author3 = $("#author-3").val().trim();
        var refName = $("#ref-name").val().trim();
        var authorMoreThan3 = $("#author-more-than-3").val();
        // 获取当前下拉列表选中的参考文献类型
        var selectedRef = $("#selected-ref").html();
        // 是否为中文文献
        var isChineseRef = false;
        for (var i = 0; i < refName.length; i++) {
            if (refName.charCodeAt(i) >= 19968 && refName.charCodeAt(i) <= 40869) {
                isChineseRef = true;
                break;
            }
        }
        // 作者1为必填项
        if (author1 == "") {
            showErrorInfo("\"作者1\"为必填项！");
        } else if (refName == "") {
            showErrorInfo("\"文献名称\"为必填项！");
        } else if (selectedRef == "学位论文") {
            // 由于学位论文的特殊性，此处单独处理
            var dissertationPlace = $("#dissertation-place").val().trim();
            var dissertationInstitution = $("#dissertation-institution").val().trim();
            var dissertationYear = $("#dissertation-year").val().trim();
            var dissertationType = ($("#dissertation-type").val() == "master") ? "硕士学位论文" : "博士学位论文";
            // 检查必填项是否填写完整且合法
            if (dissertationPlace == "") {
                showErrorInfo("\"保存地点\"为必填项！");
            } else if (dissertationInstitution == "") {
                showErrorInfo("\"保存单位\"为必填项！");
            } else if (dissertationYear == "") {
                showErrorInfo("\"年份\"为必填项！");
            } else if (!isStrPositiveInteger(dissertationYear)) {
                showErrorInfo("\"年份\"填写非法！");
            } else {
                $("#result").fadeOut(150);
                // 生成学位论文参考文献格式
                refResult = author1 + ". " + refName + ": [" + dissertationType + "]. " + dissertationPlace + ": " + dissertationInstitution + ", " + dissertationYear;
                setTimeout(function(){
                    $("#result").html(refResult);
                    $("#result").fadeIn(150);
                    if (refResult != "空") {
                        showOKInfo("参考文献格式生成成功！");
                    } else {
                        showErrorInfo("参考文献格式生成失败！");
                    }
                }, 150);
            }
        } else if (authorMoreThan3 == "false" && author3 != "" && author2 == "") {
            showErrorInfo("请先填写\"作者2\"！");
        } else if (authorMoreThan3 == "true" && author2 == "") {
            showErrorInfo("\"作者2\"为必填项！");
        } else if (authorMoreThan3 == "true" && author3 == "") {
            showErrorInfo("\"作者3\"为必填项！");
        } else {
            // 将所有作者先行拼合起来
            allAuthors = author1;
            if (author2 != "") {
                allAuthors += (", " + author2);
            }
            if (author3 != "") {
                allAuthors += (", " + author3);
            }
            if (authorMoreThan3 == "true") {
                allAuthors += (isChineseRef ? "等. " : ", et al. ");
            } else {
                allAuthors += ". ";
            }
            // 判断当前下拉列表中的参考文献类型
            if (selectedRef == "图书") {
                var bookEdition = $("#book-edition").val().trim();
                var bookTranslator = $("#book-translator").val().trim();
                var bookPublishPlace = $("#book-publish-place").val().trim();
                var bookPublisher = $("#book-publisher").val().trim();
                var bookPublishYear = $("#book-publish-year").val().trim();
                var bookStartPage = $("#book-start-page").val().trim();
                var bookEndPage = $("#book-end-page").val().trim();
                var bookEditionResult = "";
                // 检查必填项是否填写完整且合法
                if (bookEdition == "") {
                    showErrorInfo("\"图书版本\"为必填项！");
                } else if (bookPublishPlace == "") {
                    showErrorInfo("\"出版地\"为必填项！");
                } else if (bookPublisher == "") {
                    showErrorInfo("\"出版者\"为必填项！");
                } else if (bookPublishYear == "") {
                    showErrorInfo("\"出版年\"为必填项！");
                } else if (bookStartPage == "") {
                    showErrorInfo("\"起始页\"为必填项！");
                } else if (bookEndPage == "") {
                    showErrorInfo("\"终止页\"为必填项！");
                } else if (!isStrPositiveInteger(bookEdition)) {
                    showErrorInfo("\"图书版本\"填写非法！");
                } else if (!isStrPositiveInteger(bookPublishYear)) {
                    showErrorInfo("\"出版年\"填写非法！");
                } else if (!isStrPositiveInteger(bookStartPage)) {
                    showErrorInfo("\"起始页\"填写非法！");
                } else if (!isStrPositiveInteger(bookEndPage)) {
                    showErrorInfo("\"终止页\"填写非法！");
                } else if (parseInt(bookStartPage) > parseInt(bookEndPage)) {
                    showErrorInfo("起始页不能大于终止页！");
                } else {
                    $("#result").fadeOut(150);
                    // 生成图书参考文献格式
                    if (bookEdition == "") {
                        bookEditionResult = isChineseRef ? "第1版" : "1st Edition";
                    } else if (isChineseRef) {
                        bookEditionResult = "第" + bookEdition + "版";
                    } else if (bookEdition % 10 == 1 && bookEdition % 100 != 11) {
                        bookEditionResult = bookEdition + "st Edition";
                    } else if (bookEdition % 10 == 2 && bookEdition % 100 != 12) {
                        bookEditionResult = bookEdition + "nd Edition";
                    } else if (bookEdition % 10 == 3 && bookEdition % 100 != 13) {
                        bookEditionResult = bookEdition + "rd Edition";
                    } else {
                        bookEditionResult = bookEdition + "th Edition";
                    }
                    refResult = allAuthors + refName + ". " + bookEditionResult + ". " + (bookTranslator != "" ? bookTranslator + ". " : "") + bookPublishPlace + ": " + bookPublisher + ", " + bookPublishYear + ". " + bookStartPage + "~" + bookEndPage;
                    setTimeout(function(){
                        $("#result").html(refResult);
                        $("#result").fadeIn(150);
                        if (refResult != "空") {
                            showOKInfo("参考文献格式生成成功！");
                        } else {
                            showErrorInfo("参考文献格式生成失败！");
                        }
                    }, 150);
                }
            } else if (selectedRef == "期刊") {
                var journalName = $("#journal-name").val().trim();
                var journalYear = $("#journal-year").val().trim();
                var journalVolume = $("#journal-volume").val().trim();
                var journalIssue = $("#journal-issue").val().trim();
                var journalStartPage = $("#journal-start-page").val().trim();
                var journalEndPage = $("#journal-end-page").val().trim();
                // 检查必填项是否填写完整且合法
                if (journalName == "") {
                    showErrorInfo("\"期刊名\"为必填项！");
                } else if (journalYear == "") {
                    showErrorInfo("\"年份\"为必填项！");
                } else if (journalVolume == "") {
                    showErrorInfo("\"卷号\"为必填项！");
                } else if (journalIssue == "") {
                    showErrorInfo("\"期号\"为必填项！");
                } else if (journalStartPage == "") {
                    showErrorInfo("\"起始页\"为必填项！");
                } else if (journalEndPage == "") {
                    showErrorInfo("\"终止页\"为必填项！");
                } else if (!isStrPositiveInteger(journalYear)) {
                    showErrorInfo("\"年份\"填写非法！");
                } else if (!isStrPositiveInteger(journalVolume)) {
                    showErrorInfo("\"卷号\"填写非法！");
                } else if (!isStrPositiveInteger(journalIssue)) {
                    showErrorInfo("\"期号\"填写非法！");
                } else if (!isStrPositiveInteger(journalStartPage)) {
                    showErrorInfo("\"起始页\"填写非法！");
                } else if (!isStrPositiveInteger(journalEndPage)) {
                    showErrorInfo("\"终止页\"填写非法！");
                } else if (parseInt(journalStartPage) > parseInt(journalEndPage)) {
                    showErrorInfo("起始页不能大于终止页！");
                } else {
                    $("#result").fadeOut(150);
                    // 生成期刊参考文献格式
                    refResult = allAuthors + refName + ". " + journalName + ", " + journalYear + ", " + journalVolume + "(" + journalIssue + "): " + journalStartPage + "~" + journalEndPage;
                    setTimeout(function(){
                        $("#result").html(refResult);
                        $("#result").fadeIn(150);
                        if (refResult != "空") {
                            showOKInfo("参考文献格式生成成功！");
                        } else {
                            showErrorInfo("参考文献格式生成失败！");
                        }
                    }, 150);
                }
            } else if (selectedRef == "会议论文集") {
                var proceedingsName = $("#proceedings-name").val().trim();
                var proceedingsEditor1 = $("#proceedings-editor-1").val().trim();
                var proceedingsEditor2 = $("#proceedings-editor-2").val().trim();
                var proceedingsEditor3 = $("#proceedings-editor-3").val().trim();
                var conferenceAddress = $("#conference-address").val().trim();
                var conferenceYear = $("#conference-year").val().trim();
                var proceedingsPublishPlace = $("#proceedings-publish-place").val().trim();
                var proceedingsPublisher = $("#proceedings-publisher").val().trim();
                var proceedingsPublishYear = $("#proceedings-publish-year").val().trim();
                var proceedingsStartPage = $("#proceedings-start-page").val().trim();
                var proceedingsEndPage = $("#proceedings-end-page").val().trim();
                // 检查必填项是否填写完整且合法
                if (proceedingsName == "") {
                    showErrorInfo("\"论文集名\"为必填项！");
                } else if (conferenceAddress == "") {
                    showErrorInfo("\"会址\"为必填项！");
                } else if (conferenceYear == "") {
                    showErrorInfo("\"开会年\"为必填项！");
                } else if (proceedingsPublishPlace == "") {
                    showErrorInfo("\"出版地\"为必填项！");
                } else if (proceedingsPublisher == "") {
                    showErrorInfo("\"出版者\"为必填项！");
                } else if (proceedingsPublishYear == "") {
                    showErrorInfo("\"出版年\"为必填项！");
                } else if (proceedingsStartPage == "") {
                    showErrorInfo("\"起始页\"为必填项！");
                } else if (proceedingsEndPage == "") {
                    showErrorInfo("\"终止页\"为必填项！");
                } else if (!isStrPositiveInteger(conferenceYear)) {
                    showErrorInfo("\"开会年\"填写非法！");
                } else if (!isStrPositiveInteger(proceedingsPublishYear)) {
                    showErrorInfo("\"出版年\"填写非法！");
                } else if (!isStrPositiveInteger(proceedingsStartPage)) {
                    showErrorInfo("\"起始页\"填写非法！");
                } else if (!isStrPositiveInteger(proceedingsEndPage)) {
                    showErrorInfo("\"终止页\"填写非法！");
                } else if (proceedingsEditor1 == "" && (proceedingsEditor2 != "" || proceedingsEditor3 != "")) {
                    showErrorInfo("请先填写\"编者1\"！");
                } else if (proceedingsEditor1 != "" && proceedingsEditor2 == "" && proceedingsEditor3 != "") {
                    showErrorInfo("请先填写\"编者2\"！");
                } else {
                    $("#result").fadeOut(150);
                    // 生成会议论文集参考文献格式
                    var allEditors = "";
                    if (proceedingsEditor1 != "") {
                        allEditors += proceedingsEditor1;
                    }
                    if (proceedingsEditor2 != "") {
                        allEditors += (", " + proceedingsEditor2);
                    }
                    if (proceedingsEditor3 != "") {
                        allEditors += (", " + proceedingsEditor3);
                    }
                    if (isChineseRef) {
                        allEditors += " 编. ";
                    } else {
                        if (proceedingsEditor1 != "" && proceedingsEditor2 == "" && proceedingsEditor3 == "") {
                            allEditors += " ed. ";
                        } else if (proceedingsEditor1 != "" && proceedingsEditor2 != "") {
                            allEditors += " eds. ";
                        }
                    }
                    refResult = allAuthors + refName + ". " + (isChineseRef ? "见: " : "In: ") + allEditors + proceedingsName + ". " + conferenceAddress + ". " + conferenceYear + ". " + proceedingsPublishPlace + ": " + proceedingsPublisher + ", " + proceedingsPublishYear + ". " + proceedingsStartPage + "~" + proceedingsEndPage;
                    setTimeout(function(){
                        $("#result").html(refResult);
                        $("#result").fadeIn(150);
                        if (refResult != "空") {
                            showOKInfo("参考文献格式生成成功！");
                        } else {
                            showErrorInfo("参考文献格式生成失败！");
                        }
                    }, 150);
                }
            } else if (selectedRef == "专利") {
                var patentCountry = $("#patent-country").val().trim();
                var patentType = $("#patent-type").val().trim();
                var patentNumber = $("#patent-number").val().trim();
                var patentPublishYear = $("#patent-publish-year").val().trim();
                var patentStartPage = $("#patent-start-page").val().trim();
                var patentEndPage = $("#patent-end-page").val().trim();
                // 检查必填项是否填写完整且合法
                if (patentCountry == "") {
                    showErrorInfo("\"国别\"为必填项！");
                } else if (patentType == "") {
                    showErrorInfo("\"专利种类\"为必填项！");
                } else if (patentNumber == "") {
                    showErrorInfo("\"专利号\"为必填项！");
                } else if (patentPublishYear == "") {
                    showErrorInfo("\"出版年\"为必填项！");
                } else if (patentStartPage == "") {
                    showErrorInfo("\"起始页\"为必填项！");
                } else if (patentEndPage == "") {
                    showErrorInfo("\"终止页\"为必填项！");
                } else if (!isStrPositiveInteger(patentPublishYear)) {
                    showErrorInfo("\"出版年\"填写非法！");
                } else if (!isStrPositiveInteger(patentStartPage)) {
                    showErrorInfo("\"起始页\"填写非法！");
                } else if (!isStrPositiveInteger(patentEndPage)) {
                    showErrorInfo("\"终止页\"填写非法！");
                } else {
                    $("#result").fadeOut(150);
                    // 生成专利参考文献格式
                    refResult = allAuthors + refName + ". " + patentCountry + ", " + patentType + ", " + patentNumber + ", " + patentPublishYear + ". " + patentStartPage + "~" + patentEndPage;
                    setTimeout(function(){
                        $("#result").html(refResult);
                        $("#result").fadeIn(150);
                        if (refResult != "空") {
                            showOKInfo("参考文献格式生成成功！");
                        } else {
                            showErrorInfo("参考文献格式生成失败！");
                        }
                    }, 150);
                }
            }
        }
    });

    // 当按下Enter键时，触发“生成参考文献”按钮的click事件
    $("body").keyup(function(e){
        e = window.event || e;
        if (e.keyCode == 13) {
            $("#submit").trigger("click");
        }
    });

    // 复制参考文献格式到剪贴板
    $("#copy").unbind("click").click(function(){
        copyToClipboard();
    });

    // 清空
    $("#reset").click(function(){
        $("input").val("");
        $(".checkbox-checked-square").fadeOut(150);
        $("#result").fadeOut(150);
        setTimeout(function(){
            $("#result").html("空");
            $("#result").fadeIn(150);
        }, 150);
        $("#author-more-than-3").val("false");
        $("#author-label-2").html("作者2");
        $("#author-label-3").html("作者3");
    });

    // 为自定义复选按钮添加事件
    $(".checkbox").click(function(){
        checkboxEvent();
    });

    // 为自定义单选按钮添加事件
    $(".radio-option").click(function(){
        $(".radio-option").not(this).find(".radio-checked-circle").fadeOut(150);
        $(this).find(".radio-checked-circle").fadeIn(150);
        var dissertationType = $("#dissertation-type").val();
        if (dissertationType == "master") {
            $("#dissertation-type").val("phd");
        } else {
            $("#dissertation-type").val("master");
        }
    });

});