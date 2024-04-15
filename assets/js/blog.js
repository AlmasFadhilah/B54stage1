let dataBlogs = [];

// FUNGSI MENAMPILKAN DATA MY PROJECT
function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("inputName").value;
  let startDate = new Date(document.getElementById("inputDate").value);
  let endDate = new Date(document.getElementById("inputEdate").value);
  let description = document.getElementById("inputDescription").value;
  let technologyInput = [...document.querySelectorAll("input[name='technology']:checked"),];
  let image = document.getElementById("input-image").files[0];
  let imageURL = URL.createObjectURL(image);

  let technology = technologyInput.map((item) => item.value);

  let dataBlog = {
    title,
    startDate,
    endDate,
    description,
    technology,
    imageURL
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
        <img class="image1" src="${dataBlogs[index].imageURL}" alt="" />
      </div>
      <div>
        <h4><a href="detailProject.html?index=${index}">${dataBlogs[index].title}</a></h4>
        <h5>Durasi: ${getDistance(dataBlogs[index].startDate, dataBlogs[index].endDate)}</h5>
      </div>
      <div>
        <p>${dataBlogs[index].description}</p>
      </div>

      <div class="">
        ${dataBlogs[index].technology
          .map(
            (item) => `<i class="${item}"></i>`
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

// FUNGSI MENCARI JARAK WAKTU
function getDistance(startDateDistance, endDateDistance) {
    const diffTime = Math.abs(endDateDistance - startDateDistance);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonth = Math.floor(diffDays / 30);
    const diffYear = Math.floor(diffMonth / 12);

    if (diffDays === 1) {
        return "1 day";
    } else if (diffDays < 30) {
        return diffDays + " days";
    } else if (diffMonth === 1) {
        return "1 month";
    } else if (diffMonth < 12) {
        return diffMonth + " months";
    } else if (diffYear === 1) {
        return "1 year";
    } else {
        return diffYear + " years";
    }
}
