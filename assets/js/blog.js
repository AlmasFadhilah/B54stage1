let dataBlogs = [];

// FUNGSI MENAMPLKAN DATA MY PROJECT
function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("inputName").value;
  let startDate = document.getElementById("inputDate").value;
  let endDate = document.getElementById("inputEdate").value;
  let description = document.getElementById("inputDescription").value;
  let technologyInput = [
    ...document.querySelectorAll("input[name='technology']:checked"),
  ];

  let technology = technologyInput.map((item) => item.value);

  let dataBlog = {
    title,
    startDate,
    endDate,
    description,
    technology
  };

  dataBlogs.push(dataBlog);
  console.log(dataBlogs);

  renderBlog();
}

// RENDER LOOPING
function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlogs.length; index++) {
    document.getElementById("contents").innerHTML += `
    <div class="card1">
      <div>
        <img class="image1" src="../assets/image/wiaugdbsk.PNG" alt="" />
      </div>
      <div>
      
        <h4>${dataBlogs[index].title}</h4>
        <h5>
          Durasi: ${dataBlogs[index].startDate} - ${dataBlogs[index].endDate}
        </h5>
      </div>
      <div>
        <p>${dataBlogs[index].description}</p>
      </div>

      <div class="">
        ${dataBlogs[index].technology
          .map(
            (item) => `<i class="${item}"></i
        >`
          )
          .join(" ")}
      </div>

      <div>
        <div style="margin-top: 15px">
          <a href="" class="button1">Edit post</a>
          <a href="" class="button1">Delete post</a>
        </div>
      </div>
    </div>
    `;
  }
}
