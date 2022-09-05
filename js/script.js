$(function () {

    // Listeye İtem Ekle
    $('.addToList').click(function () {
        var inputData = $('#taskInput').val();
        if (inputData != "") {
            $('.toDoList').append(`
                <li class="item border p-2 gap-3 d-flex justify-content-between align-items-center" style="display: none;">
                    <p class="m-0 text-break">${inputData}</p> 
                    <div class="d-flex gap-1">
                        <button class="done btn btn-outline-success d-flex align-items-center justify-content-center">
                            <span class="material-symbols-outlined fs-6">
                                done
                            </span>
                        </button>
                        <button class="del btn btn-outline-danger px-3">x</button>
                    </div>
                </li>
            `);
            $('.toDoList li').show("slow");
        } else {
            alert('Lütfen Bir Değer Giriniz');
        }
    });

    // Bütün Listeyi Temizle
    $('.clearList').click(function () {
        $('.toDoList').hide("slow", function () { 
            $('.toDoList').empty();
            $('.toDoList').show();
        });
    });

    // Listede Tıklanan Elemanı Temizle
    $('ul').on('click', '.del', function () {
        $(this).parent().parent().hide("slow", function () {
           $(this).remove(); 
        });
    });

    // Listede Tıklanan Elemaanı Bitirdi Olarak İşaretle
    $('ul').on('click', '.done', function () {
        $(this).parent().parent().css('background','#00ff0028');
    })
});