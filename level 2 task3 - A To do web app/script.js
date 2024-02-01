document.querySelectorAll(".txtb").forEach(function(txtb) {
    txtb.addEventListener("keyup", function(e) {
        if (e.keyCode === 13 && txtb.value !== "") {
            var task = document.createElement("div");
            task.classList.add("task");
            task.innerText = txtb.value;
            
            var del = document.createElement("i");
            del.classList.add("fas", "fa-trash-alt");
            del.addEventListener("click", function() {
                var p = this.parentElement;
                p.style.display = "none";
                p.remove();
            });
            
            var check = document.createElement("i");
            check.classList.add("fas", "fa-check");
            check.addEventListener("click", function() {
                var p = this.parentElement;
                p.style.display = "none";
                document.querySelector(".comp").appendChild(p);
                p.style.display = "block";
                this.remove();
            });
            
            task.appendChild(del);
            task.appendChild(check);
            document.querySelector(".notcomp").appendChild(task);
            txtb.value = "";
        }
    });
});
