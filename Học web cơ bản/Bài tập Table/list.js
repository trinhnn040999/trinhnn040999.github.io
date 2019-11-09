function ListViewModel() {
    let self = this;
    self.list = ko.observableArray();

    var list = [
        {
            Id: 1,
            GENRE: "Film",
            TITLE: "The Deer",
            DURATION: "6:24",
            DATE: "2014-02-28"
        },
        {
            Id: 2,
            GENRE: "Animation",
            TITLE: "Wildfood",
            DURATION: "3:47",
            DATE: "2014-07-16"
        },
        {
            Id: 3,
            GENRE: "Film",
            TITLE: "The Deer",
            DURATION: "6:24",
            DATE: "2014-02-28"
        },
        {
            Id: 4,
            GENRE: "Animation",
            TITLE: "The Ghost",
            DURATION: "11:40",
            DATE: "2014-04-10"
        },
        {
            Id: 5,
            GENRE: "Film",
            TITLE: "Animals",
            DURATION: "6:40",
            DATE: "2005-12-21"
        },
        {
            Id: 6,
            GENRE: "Btion",
            TITLE: "Wagons",
            DURATION: "21:40",
            DATE: "2007-04-21"
        },
        {
            Id: 7,
            GENRE: "Animation",
            TITLE: "The Ghost",
            DURATION: "11:40",
            DATE: "2014-04-10"
        },
        {
            Id: 8,
            GENRE: "Elm",
            TITLE: "Animals",
            DURATION: "6:40",
            DATE: "2005-12-21"
        },
        {
            Id: 9,
            GENRE: "Animation",
            TITLE: "Wagons",
            DURATION: "21:40",
            DATE: "2007-04-12"
        }
    ];

    self.list(list);

    self.genreTopClick = function () {
        let listFilter = list.sort(function (a, b) {
            return a.GENRE.localeCompare(b.GENRE);
        });

        self.list([]);
        self.list(listFilter);
    }

    self.genreBottomClick = function () {
        let listFilter = list.sort(function (a, b) {
            return a.GENRE.localeCompare(b.GENRE);
        });

        self.list([]);
        self.list(listFilter.reverse());
    }

    self.titleTopClick = function () {
        let listFilter = list.sort(function (a, b) {
            return a.TITLE.localeCompare(b.TITLE);
        });

        self.list([]);
        self.list(listFilter);
    }

    self.titleBottomClick = function () {
        let listFilter = list.sort(function (a, b) {
            return a.TITLE.localeCompare(b.TITLE);
        });

        self.list([]);
        self.list(listFilter.reverse());
    }

    self.durationTopClick = function () {
        let listFilter = list.sort(function (a, b) {
            return a.DURATION.localeCompare(b.DURATION);
        });

        self.list([]);
        self.list(listFilter.reverse());
    }

    self.durationBottomClick = function () {
        let listFilter = list.sort(function (a, b) {
            return a.DURATION.localeCompare(b.DURATION);
        });

        self.list([]);
        self.list(listFilter);
    }

    self.dateTopClick = function () {
        let listFilter = list.sort(function (a, b) {
            return a.DATE.localeCompare(b.DATE);
        });

        self.list([]);
        self.list(listFilter);
    }

    self.dateBottomClick = function () {
        let listFilter = list.sort(function (a, b) {
            return a.DATE.localeCompare(b.DATE);
        });

        self.list([]);
        self.list(listFilter.reverse());
    }
}


$(document).ready(function () {
    ko.applyBindings(new ListViewModel());
});