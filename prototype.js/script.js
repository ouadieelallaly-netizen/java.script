let missionOne = document.getElementById('m1');
    let missionTwo = document.getElementById('m2');
    let missionThree = document.getElementById('m3');
    let missionFour = document.getElementById('m4');

    let progressText = document.getElementById('progress');

    function refreshProgress() {
      let completed = 0;
      if (missionOne.checked) completed++;
      if (missionTwo.checked) completed++;
      if (missionThree.checked) completed++;
      if (missionFour.checked) completed++;

      progressText.textContent = completed + ' of 4 completed';
    }

    missionOne.addEventListener('change', refreshProgress);
    missionTwo.addEventListener('change', refreshProgress);
    missionThree.addEventListener('change', refreshProgress);
    missionFour.addEventListener('change', refreshProgress);

    refreshProgress();