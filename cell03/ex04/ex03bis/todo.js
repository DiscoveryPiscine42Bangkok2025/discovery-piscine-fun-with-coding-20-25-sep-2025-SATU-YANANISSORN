$(document).ready(function() {
    const $list = $("#todo_list");
    const $newButton = $("#newButton");

    function create(text) {
        const $li = $("<li></li>").addClass("todo").text(text);

        $li.on("click", function() {
            removeList($li);
        });

        $list.append($li);
    }

    function removeList($item) {
        const confirmDelete = confirm("Do you really want to remove this TO DO?");
        if (confirmDelete) {
            $item.remove();
        }
    }

    $newButton.on("click", function() {
        const text = prompt("Enter your new TO DO:");
        if (text && text.trim() !== "") {
            create(text.trim());
        }
    });
});
