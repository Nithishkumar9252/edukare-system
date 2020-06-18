const BAR = document.getElementById("subjm");
let subjm = new Chart(BAR, {
    type: 'bar',
    data: {
        labels: ['Sub1', 'Sub2', 'Sub3', 'Sub4', 'Sub5', 'Sub6'],
        datasets: [{
            label: 'Marks Scored',
            data: [45, 56, 43, 69, 22, 83],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 20,
                    beginAtZero: true
                }
            }]
        }
    }
});

const PIE = document.getElementById("Apti");
let Apti = new Chart(PIE, {
    type: 'doughnut',
    data: {
        labels: ['Inductive Reasoning', 'Mechanical Reasoning', 'Spatial Reasoning',
                 'Situational Judgement', 'Mental Arithmetic', 'Number Sequences', 'Verbal Analogies', 'Syllogisms'],
        datasets: [{
            label: 'Accuracy',
            data: [10, 10, 5, 3, 2, 20, 15, 15],
            backgroundColor: [
                "#E74C3C",
                "#8E44AD",
                "#3498DB",
                "#808B96",
                "#F1C40F",
                "#EB984E",
                "#76D7C4",
                "#1F618D"
            ]
        }],
    }
});

const LINE2 = document.getElementById("perpfo");
let perpfo = new Chart(LINE2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Performance Rate',
            data: [10, 20, 30, 50, 40, 45, 30, 10, 40, 60, 87, 80],
            backgroundColor: [
                'rgba(0, 0, 0, 0)',
            ],
            borderColor: [
                '#FFE033',
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 20,
                    beginAtZero: true
                }
            }]
        }
    }
});

const LINE = document.getElementById("testO");
let testO = new Chart(LINE, {
    type: 'bar',
    data: {
        labels: ['class 6', 'class 7', 'class 8', 'class 9', 'class 10', 'class 11', 'class 12'],
        datasets: [{
            label: 'Performance Rate',
            data: [45, 56, 43, 69, 58, 83, 54],
            backgroundColor: '#A303B5',
            borderColor: '#000000',
            }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 20,
                    beginAtZero: true
                }
            }]
        }
    }
});