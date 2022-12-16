const table = document.querySelector("#songs");
const musicEle = document.getElementById("currentSong");
const song_name = document.querySelector(".song_name_head");
let fwd_stk = [];
let curr_playing = {};
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a83380062msheb2a095c921b1dcp14cd62jsn4d8275e82fc6",
    "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
  },
};

document.querySelector(".active_page").style.color = "red";
const _like = document.querySelector("#like");
if (_like) {
  _like.style.display = "none";
}
let state = 1;
let music_state = document.querySelector(".music_state");
const changeState = () => {
  if (state == 0) {
    musicEle.pause();
    music_state.innerHTML = `<img src="./Assets/play-solid.svg" alt="play" id="play" />`;
    state = 1;
  } else {
    musicEle.play();
    music_state.innerHTML = `<img src="./Assets/pause-solid.svg" alt="pause" id="pause" />`;
    state = 0;
  }
};
const getDownloadLink = (id) => {
  fetch(
    `https://youtube-music1.p.rapidapi.com/get_download_url?id=${id}`,
    options
  )
    .then((response) => response.json())
    .then((response) => playThisSong(response.result.download_url, id));
};

const getRow = (id, title, duration) => {
  const conversionDuration = (duration) => {
    let rem;
    rem = Math.floor(duration / 60);
    let rems = duration - rem * 60;
    if (rems < 10) {
      return `${rem}:0${rems}`;
    } else {
      return `${rem}:${rems}`;
    }
  };
  const trow = document.createElement("tr");
  const tdata1 = document.createElement("td");
  tdata1.append(conversionDuration(duration));
  const tdata2 = document.createElement("td");
  tdata2.append(title);
  const tdata3 = document.createElement("td");
  const tbutton = document.createElement("input");
  tbutton.type = "button";
  tbutton.value = "Play";
  tbutton.classList.add("list_play_button");
  tbutton.addEventListener("click", () => {
    let like = document.querySelector("#like");
    like.style.display = "block";
    let liked = is_liked(id);
    if (liked) {
      like.src = "./Assets/liked.png";
    } else {
      like.src = "./Assets/tolike.png";
    }
    song_name.innerHTML = title;
    getDownloadLink(id);
    changeState();
    curr_playing = { id, title, duration };
    history();
  });
  tdata3.append(tbutton);
  trow.append(tdata1);
  trow.append(tdata2);
  trow.append(tdata3);
  return trow;
};

const getTable = (songs_data) => {
  let l = songs_data.length < 10 ? songs_data.length : 10;
  songs_data = songs_data.slice(0, l);
  //console.log(songs_data);
  fwd_stk = songs_data;
  for (let song of songs_data) {
    table.append(getRow(song.id, song.title, song.duration));
  }
};
const getData = (loc) => {
  loc = loc.split("/")[1].split(".")[0];
  let songs_data = {
    data: {
      global: [
        {
          id: "GEjXBKvQ24M",
          title: "As It Was",
          duration: 166,
        },
        {
          id: "wp43OdtAAkM",
          title: "Running Up That Hill",
          duration: 296,
        },
        {
          id: "mRD0-GxqHVo",
          title: "Heat Waves ",
          duration: 236,
        },
        {
          id: "XwxLwG2_Sxk",
          title: "The Weeknd - Blinding Lights",
          duration: 200,
        },
        {
          id: "-DZhgGOQCM8",
          title: "Harry Styles - Late Night Talking",
          duration: 179,
        },
        {
          id: "orJSJGHjBLI",
          title: "Bad Habits",
          duration: 241,
        },
        {
          id: "JztFZh6Nk1g",
          title: "Changes ",
          duration: 197,
        },
        {
          id: "oh2LWWORoiM",
          title: "Habits (Stay High)",
          duration: 209,
        },
        {
          id: "YykjpeuMNEk",
          title: "Hymn for the Weekend",
          duration: 261,
        },
        {
          id: "syFZfO_wfMQ",
          title: "Night Changes",
          duration: 241,
        },
      ],

      india: [
        {
          id: "4ecGgFRps8g",
          title: "Kesariya - Brahmāstra ",
          duration: 153,
        },
        {
          id: "lVRKLne6D4U",
          title: "Pasoori ",
          duration: 224,
        },
        {
          id: "KUN5Uf9mObQ",
          title: "Arabic Kuthu",
          duration: 282,
        },
        {
          id: "1OjZnGZjOA0",
          title: "Pathala Pathala Video ",
          duration: 169,
        },
        {
          id: "fzOPc-VtcTE",
          title: "Galliyan Returns",
          duration: 165,
        },
        {
          id: "WWXm39leYew",
          title: "Kaise Hua",
          duration: 255,
        },
        {
          id: "suk3mW0tDPA",
          title: "Mehabooba KGF-2",
          duration: 248,
        },
      ],

      local: [
        {
          id: "f0T6jFsWMak",
          title: "Bullet Song",
          duration: 242,
        },
        {
          id: "X358sf4QK7Y",
          title: 'Darshana (From "Hridayam")',
          duration: 292,
        },
        {
          id: "I8c0-NEBqL0",
          title: "Tillu Anna DJ Pedithe ",
          duration: 187,
        },
        {
          id: "Q-XhCXUFA98",
          title: "Kaanunna Kalyanam Sita Ramam (Telugu) ",
          duration: 231,
        },
        {
          id: "VdGY5cs7onc",
          title: "PataasPilla Song ",
          duration: 211,
        },
        {
          id: "VZmzhoOoma8",
          title: "Chitti cover song ",
          duration: 151,
        },
        {
          id: "0SO3d71Nm3A",
          title: "Sulthana Song (Telugu) ",
          duration: 225,
        },
        {
          id: "ouKbrNiaPxo",
          title: "Komuram Bheemudho",
          duration: 344,
        },
        {
          id: "Gt9WzC4WDEA",
          title: "Naatu Naatu",
          duration: 209,
        },
        {
          id: "qItykoFeqNE",
          title: "Master the blaster ",
          duration: 257,
        },
      ],

      trending: [
        {
          id: "KUN5Uf9mObQ",
          title: "Arabic Kuthu",
          duration: 282,
        },
        {
          id: "4ecGgFRps8g",
          title: "Kesariya - Brahmāstra ",
          duration: 153,
        },
        {
          id: "nXtY9Oqnjug",
          title: "Into Your Arms (feat. Ava Max) - Witt Lowry (Lyrics)",
          duration: 190,
        },
        {
          id: "oSHzUD-uqKY",
          title: "MIDDLE OF THE NIGHT",
          duration: 191,
        },
        {
          id: "lNRh_XGDbVA",
          title: "LISA - MONEY (Lyrics)",
          duration: 220,
        },
        {
          id: "X358sf4QK7Y",
          title: 'Darshana (From "Hridayam")',
          duration: 292,
        },
      ],
    },
  };
  if (loc === "global") {
    getTable(songs_data.data.global);
  } else if (loc === "india") {
    getTable(songs_data.data.india);
  } else if (loc === "local") {
    getTable(songs_data.data.local);
  } else if (loc === "trending") {
    getTable(songs_data.data.trending);
  } else {
    let _home = [];
    for (let i in songs_data.data.global) {
      _home.push(songs_data.data.global[i]);
    }
    for (let i in songs_data.data.india) {
      _home.push(songs_data.data.india[i]);
    }
    for (let i in songs_data.data.local) {
      _home.push(songs_data.data.local[i]);
    }
    for (let i in songs_data.data.trending) {
      _home.push(songs_data.data.trending[i]);
    }
    _home = _home.sort(() => Math.random() - 0.5);
    _home = _home.splice(0, 10);
    getTable(_home);
  }
};

const fetchOnLoadFunction = (page) => {
  fetch(
    "https://youtube-music1.p.rapidapi.com/v2/search?query=laestest%20songs",
    options
  )
    .then((response) => response.json())
    .then((response) => getTable(response.result.videos))
    .catch((err) => console.error(err));
};

const fetchOnLoad = () => {
  let loc = window.location.pathname;
  loc = loc.split("/")[1];
  if (loc === "liked.html" || loc == "feedback.html" || loc == "history.html") {
    if (loc == "liked.html") {
      let liked_songs = window.localStorage.getItem("liked");
      if (liked_songs) {
        liked_songs = JSON.parse(liked_songs);
        liked_songs = liked_songs.reverse();
        getTable(liked_songs);
      }
    }
    if (loc === "history.html") {
      let history_local = window.localStorage.getItem("history");
      if (history_local) {
        history_local = JSON.parse(history_local);
        getTable(history_local);
      }
    }
  } else {
    getData(window.location.pathname);
  }
};
fetchOnLoad();

const history = () => {
  let history_local = window.localStorage.getItem("history");
  if (history_local) {
    local_history = window.localStorage.getItem("history");
    history_local = JSON.parse(local_history);
    history_local.push(curr_playing);
    history_local = history_local.splice(-10);
    window.localStorage.setItem("history", JSON.stringify(history_local));
  } else {
    let history_local = [];
    history_local.push(curr_playing);
    window.localStorage.setItem("history", JSON.stringify(history_local));
  }
};
const playThisSong = (url, id) => {
  let musicEle = document.getElementById("currentSong");
  musicEle.src = url;
  if (state == 1) {
    changeState();
  }
  musicEle.play();
};

music_state.addEventListener("click", () => {
  changeState();
});
const play_prev_song = document.querySelector("#backward");
play_prev_song.addEventListener("click", () => {
  let local_history = window.localStorage.getItem("history");
  if (local_history) {
    local_history = JSON.parse(local_history);
    if (local_history.length > 1) {
      let prev_song = local_history.pop();
      let to_play = local_history.pop();
      local_history.push(prev_song);
      window.localStorage.setItem("history", JSON.stringify(local_history));
      song_name.innerHTML = to_play.title;
      getDownloadLink(to_play.id);
      curr_playing = to_play;
      history();
    }
  }
});
const play_next_song = document.querySelector("#forward");
play_next_song.addEventListener("click", () => {
  let to_play = fwd_stk[Math.floor(Math.random() * fwd_stk.length - 1)];
  song_name.innerHTML = to_play.title;
  getDownloadLink(to_play.id);
  curr_playing = to_play;
  history();
});
const is_liked = (id) => {
  let liked_songs = window.localStorage.getItem("liked");
  if (liked_songs) {
    liked_songs = JSON.parse(liked_songs);
    for (let song of liked_songs) {
      if (song.id === id) {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
};

const like = document.querySelector("#like");
if (like) {
  like.addEventListener("click", () => {
    if (curr_playing.id && !is_liked(curr_playing.id)) {
      like.src = "/Assets/liked.png";
      document.querySelector(".alert").style.display = "block";
      document.querySelector(".alert").innerHTML = "Added to Liked Songs";
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 1500);
      let local_liked = window.localStorage.getItem("liked");
      if (local_liked) {
        local_liked = JSON.parse(local_liked);
        local_liked.push(curr_playing);
        window.localStorage.setItem("liked", JSON.stringify(local_liked));
      } else {
        let local_liked = [];
        local_liked.push(curr_playing);
        window.localStorage.setItem("liked", JSON.stringify(local_liked));
      }
    } else if (is_liked(curr_playing.id)) {
      like.src = "/Assets/tolike.png";
      document.querySelector(".alert").style.display = "block";
      document.querySelector(".alert").innerHTML = "Removed from Liked Songs";
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 1500);
      let local_liked = window.localStorage.getItem("liked");
      if (local_liked) {
        local_liked = JSON.parse(local_liked);
        let new_liked = [];
        for (let song of local_liked) {
          if (song.id != curr_playing.id) {
            new_liked.push(song);
          }
        }
        window.localStorage.setItem("liked", JSON.stringify(new_liked));
      }
    }
  });
}

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,1)";
  document.querySelector("#open_nav").style.display = "none";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.querySelector("#open_nav").style.display = "block";
}
const open_nav = document.getElementById("open_nav");
open_nav.addEventListener("click", openNav);
const close_nav = document.getElementById("close_nav");
close_nav.addEventListener("click", closeNav);

if (window.innerWidth > 768) {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "white";
  document.querySelector(".closebtn").style.display = "none";
  document.querySelector("#open_nav").style.display = "none";
  document.querySelector("#body").style.marginLeft = "250px";
}
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.getElementById("mySidenav").style.width = "300px";
    document.body.style.backgroundColor = "white";
    document.querySelector(".closebtn").style.display = "none";
    document.querySelector("#open_nav").style.display = "none";
    document.querySelector("#body").style.marginLeft = "350px";
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.querySelector(".closebtn").style.display = "block";
    document.querySelector("#open_nav").style.display = "block";
    document.querySelector("#body").style.marginLeft = "0";
  }
});

const search_btn = document.querySelector(".search_btn");
search_btn.addEventListener("click", () => {
  const search_input = document.querySelector(".search_text").value;
  const table = document.querySelector("#songs");
  table.innerHTML = "";
  fetch(
    `https://youtube-music1.p.rapidapi.com/v2/search?query=${search_input}`,
    options
  )
    .then((response) => response.json())
    .then((response) => getTable(response.result.videos.splice(0, 5)))
    .catch((err) => console.error(err));
});
const shareButton = document.querySelector("#share");
shareButton.addEventListener("click", async () => {
  try {
    navigator.clipboard.writeText(window.location.href);
    document.querySelector(".alert").style.display = "block";
    document.querySelector(".alert").innerHTML = "Link Copied";
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 1500);
  } catch (err) {
    console.error("Share failed:", err.message);
  }
});
