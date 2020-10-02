// default output file if not specified
module.exports.outputFilename = "Weekly_Report";

module.exports.metaData = {
    title: 'Weekly Report',
    subject: 'Web UI Team Weekly Report',
    company: 'Aer Lingus'
}

// colours palette
module.exports.colours = {
    teal: '006272',
    grey: 'DDDDDD',
    black: '2c2a28'
}

module.exports.textLabels = {
    slideHeader: 'Engineering Leadership',
    leaderText: 'Leader:',
    periodText: 'Reporting Period:',
    leftColHeader: 'Progress This Week', 
    rightColHeader: 'Planned for Next Week',
    footer: 'People Value Quality'
}

// style preset
module.exports.presets = {
    global: {
        columnWidth: '45%',
        headerHeight: 0.6,
        bodyHeight: 5, 
        leftColumnXPosition: 0.5
    },
    tableOptions: {
        x: 0.5,
        y: 0.13,
        h: 0.67,
        valign: 'middle',
        colW: [6, 2.5, 2.5]
    },
    presentationHeaderStyle: {
        fontSize: 18,
        bold: true,
        color: '006272',
        margin: 3
    },
    columnHeader: {
        fontSize: 11,
        color: 'FFFFFF',
        fontFace: 'Calibri',
        align: 'center',
        bold: true
    },
    bulletPoint: {
        fontSize: 9,
        fontFace: 'Arial',
        color: '222222',
        bullet: true
    },
    projectHeader: {
        fontSize: 10,
        fontFace: 'Arial',
        color: '222222',
        bullet: true, 
        bold: true, 
        paraSpaceBefore: 12
    }, 
    defaultText: {
        fontSize: 11,
        fontFace: 'Arial',
        color: '222222',
    }
}

module.exports.eiLogo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDE3LjMgMjY1LjEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE0MTcuMyAyNjUuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZmlsbD0iIzgyQzM0MSIgZD0iTTE0MTUuOCwxMzkuNGMtNS4xLDE2LjQtMjIuMSwzMS44LTQyLjUsMzVjMy4zLDUuMSw0LjgsMTEuNCw0LDE4LjRjLTIuMiwxOS0yMC40LDM0LjMtMzkuOSwzNC41CgkJCWMtMTMuMiwwLjEtMzEuMS01LjYtNDMuNy0yNS41Yy0xMS4zLTE3LjctMTIuOS00NS44LTEyLjEtNTQuM2MtMTMuOCwxNC4xLTIyLjQsMjcuOC0yNi41LDM3LjNjLTkuMiwyMS41LTEyLjcsNDcuNy0xMi41LDYwCgkJCWMwLDAtMS43LDEuNi0zLjMsMS45Yy01LjEtMC45LTkuNS0yLjgtMTIuOC01LjdjLTQtMy42LTQuOS03LTQuOS03YzYuMS0zMC41LDE1LjgtNDkuNSwzMC4zLTcxLjJjMTkuNS0yOS4zLDQ5LjYtNDcuNCw4NS4zLTU4LjMKCQkJYzI1LjgtNy45LDUyLjYtOS42LDcxLDZDMTQxOC4xLDExOC43LDE0MTguNywxMzAuNSwxNDE1LjgsMTM5LjR6IE0xMjYzLjgsMTIzLjJjLTYuMSwxMC4yLTIyLjgsMjYuNi0zNiwzNS4xCgkJCWMtMjcuNSwxNy42LTQ3LjMsMTguOC01Ny4yLDEyLjVjLTEuMi0wLjctMi4yLTEuNi0zLjEtMi41Yy03LjctOC4xLTYuNC0yMi41LDIuNi0zNC4zYzQuNC01LjgsMTAuMS05LjksMTUuNi0xMS44CgkJCWMtNC4zLTItNy4yLTYuMi03LjgtMTIuMWMtMS4yLTExLjgsNy43LTI3LjMsMjAtMzMuNmMxMC44LTUuNSwzNC4xLTExLDUxLjIsMTQuNUMxMjU1LjgsMTAwLjksMTI2MS44LDExNSwxMjYzLjgsMTIzLjIKCQkJTDEyNjMuOCwxMjMuMnogTTEzNzYuOCwxNmMtMS41LTE0LjctMTcuMi0yMC4xLTM0LjUtMTIuN2MtOC4yLDMuNS0xNS40LDkuNC0yMC41LDE2LjFjMC44LTYuNy0xLjEtMTIuNi01LjktMTYuMQoJCQljLTkuNS02LjktMjYuOC0xLjgtMzguNiwxMWMtNC4xLDQuNS0xNy41LDIwLjctMTguMiw0NC41Yy0wLjMsMTEuNSw0LjgsMzcsMjEuNiw1NC42bDAsMGM0NC44LTE2LjksNjguOS00Mi44LDc4LjEtNTMuNQoJCQljMTAuNi0xMi40LDE1LjEtMjMuMywxNy0zMS4zQzEzNzcuMiwyMi4zLDEzNzcsMTcuOCwxMzc2LjgsMTZ6Ii8+CgkJPHBhdGggZmlsbD0iIzNDQjE0QSIgZD0iTTEzNTguOCw1OS45YzEwLjYtMTIuNCwxNS4xLTIzLjMsMTctMzEuM2MwLjEtMC40LDAuMi0wLjgsMC4zLTEuM2MtMi4yLDguOS0yMSwzMS45LTQ3LDUxLjUKCQkJYy0yNywyMC4zLTQyLjQsMzAuNS00OC4zLDM0LjVDMTMyNS41LDk2LjUsMTM0OS42LDcwLjYsMTM1OC44LDU5Ljl6Ii8+CgkJPHBhdGggZmlsbD0iIzNDQjE0QSIgZD0iTTEyMjcuOCwxNTguMmMxMy4yLTguNSwyOS45LTI0LjksMzYtMzUuMWwwLDBjLTExLjgsMTEuMi0yOS4yLDI3LjktNTkuMSw0MS4xCgkJCWMtMTQuOCw2LjMtMjkuMyw4LjctMzQuMSw2LjRDMTE4MC41LDE3NywxMjAwLjMsMTc1LjgsMTIyNy44LDE1OC4yeiIvPgoJCTxwYXRoIGZpbGw9IiMzQ0IxNEEiIGQ9Ik0xNDE1LjgsMTM5LjRjMC43LTIuMiwxLjItNC41LDEuNC02LjljLTEuNCw5LjUtNy44LDIxLTE4LDI3LjNjLTksNS42LTE5LjQsOS4zLTMxLjIsOC4zCgkJCWMxLjksMS44LDMuNCwzLjMsNS4zLDYuMmwwLDBsMCwwQzEzOTMuNywxNzEuMiwxNDEwLjcsMTU1LjgsMTQxNS44LDEzOS40eiIvPgoJCTxwYXRoIGZpbGw9IiNGOUVEMzIiIGQ9Ik0xMjg0LjQsMTI5LjRMMTI4NC40LDEyOS40Yy0wLjEsMC4xLTAuMiwwLjEtMC4yLDAuMkMxMjg0LjIsMTI5LjUsMTI4NC4zLDEyOS40LDEyODQuNCwxMjkuNAoJCQlDMTI4NC40LDEyOS40LDEyODQuNCwxMjkuNCwxMjg0LjQsMTI5LjR6Ii8+CgkJPHBhdGggZmlsbD0iIzNDQjE0QSIgZD0iTTEyODQuMiwxMjkuNWMtMzIuMSwyMy00Myw2NC40LTQ0LjgsMTE3LjFsMCwwYzEuNi0wLjMsMy4zLTEuOSwzLjMtMS45Yy0wLjItMTIuMywzLjMtMzguNCwxMi41LTYwCgkJCWM0LjEtOS41LDEyLjctMjMuMiwyNi41LTM3LjNjMS05LjQsMi4xLTE0LjksMi44LTE4QzEyODQuMywxMjkuNCwxMjg0LjIsMTI5LjUsMTI4NC4yLDEyOS41eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0iIzAwNjQ3MiIgZD0iTTgwMC45LDE4NC43YzE4LjYtOS40LDI1LjMtMjguNSwyNS4zLTQzLjhjMC0xNy4xLTUuMi0zMC42LTE1LjMtNDAuNWMtMC45LTAuOS0xLjgtMS43LTIuOC0yLjVsMTYtMjYuNwoJCQlsLTIzLjcsMGwtMTAuMiwxNy4xYy03LjgtMi42LTE2LTMuOC0yMy41LTMuOGMtMTQuOSwwLTI5LjgsNS4zLTQwLjgsMTQuNmMtOC43LDcuNC0xOS4xLDIwLjYtMTkuMSw0MS44CgkJCWMwLDM2LjgsMjcuNyw0NS44LDU0LjUsNTQuNmwxNC45LDQuN2MxNS45LDQuNywyNS41LDcuNiwyNS41LDIwLjFjMCw1LjctMiwxMC42LTYsMTQuM2MtNi4yLDUuOS0xNy4xLDkuMS0yOS4xLDguNAoJCQljLTEwLjUtMC42LTMyLjgtMi43LTM1LjYtMjUuNmwtMjMsMGMwLDI5LjIsMjYuMSw0Ny43LDU4LjUsNDcuN2MyMC44LDAsMzYuMi01LjksNDYuNS0xNS45YzguMS03LjgsMTIuNC0xNy45LDEyLjQtMjkuMgoJCQlDODI1LjYsMjA0LDgxNi45LDE5MS41LDgwMC45LDE4NC43eiBNNzk3LjIsMTYzLjNjLTMuOSw2LjUtMTAuOCwxMi45LTE5LjQsMTQuOGMwLDAtMTYuMi00LjYtMjYuNy04LjIKCQkJYy0xNC4yLTQuOS0yMC44LTE0LjEtMjAuOC0yOWMwLTIzLjYsMTguOS0zNC40LDM2LjUtMzQuNGMxNy41LDAsMzYuMywxMSwzNi4zLDM0LjNDODAzLjEsMTUwLjMsODAwLjgsMTU3LjMsNzk3LjIsMTYzLjN6Ii8+CgkJPGc+CgkJCTxyZWN0IHg9IjUzMSIgeT0iODguMyIgZmlsbD0iIzAwNjQ3MiIgd2lkdGg9IjIzLjYiIGhlaWdodD0iMTE2LjYiLz4KCQkJPHBhdGggZmlsbD0iIzAwNjQ3MiIgZD0iTTUyOS42LDU5LjJjMC03LjQsNC45LTEyLjcsMTMuMy0xMi43YzguMiwwLDEzLjEsNS4zLDEzLjEsMTIuN2MwLDcuOC00LjksMTMuMS0xMy4xLDEzLjEKCQkJCUM1MzQuNCw3Mi4yLDUyOS42LDY3LDUyOS42LDU5LjJ6Ii8+CgkJPC9nPgoJCTxwYXRoIGZpbGw9IiMwMDY0NzIiIGQ9Ik04OSw1NC4xbC0yNC41LDBMMCwyMDQuOWgyNS40bDE2LjQtMzguM2w2OS45LDBsMTYuNCwzOC4zbDI1LjQsMEw4OSw1NC4xeiBNNTAuMywxNDUuOGwyNi4zLTYxLjYKCQkJbDI2LjMsNjEuNkw1MC4zLDE0NS44eiIvPgoJCTxwb2x5Z29uIGZpbGw9IiMwMDY0NzIiIHBvaW50cz0iNDM5LjQsNTQuMSA0MTQuNiw1NC4xIDQxNC42LDIwNC45IDUxNi42LDIwNC45IDUxNi42LDE4NC4xIDQzOS40LDE4NC4xIAkJIi8+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiMwMDY0NzIiIGQ9Ik05OTIuNSw5MC4zYy0xMi42LDUuNi0xOS41LDE1LjctMjAsMjcuNGMtMS4zLDI3LjMsMTkuNiwzMy43LDQ3LjYsMzcuNmMyMi4zLDMuMSwzNS4xLDYuNCwzNC41LDE3LjYKCQkJCWMtMC4yLDMuNC0zLDcuNy03LjEsOS43Yy0xNSw3LjUtNTMuMSwzLjUtNzEtNy42bC00LjksMTkuOWMxMC44LDcsMjcsMTEuMSw0Mi40LDExLjhjMTYuNywwLjgsMzMuNi0wLjQsNDUuOC02LjIKCQkJCWMxMS45LTUuNywxOC4xLTE2LjMsMTguNi0yNy42YzEuMi0yNi44LTIzLjgtMzIuNi00Ny4yLTM2LjdjLTI2LjYtNC42LTM2LjMtNy4zLTM1LjYtMTguOGMwLjMtNS40LDUuMy04LjksOS4zLTEwLjEKCQkJCWMxNC41LTQuNSw0NS0xLjUsNjIuOSw4LjNsNC43LTIwLjFDMTA0OS4yLDgzLjgsMTAxMy45LDgwLjgsOTkyLjUsOTAuM3oiLz4KCQk8L2c+CgkJPHBhdGggZmlsbD0iIzAwNjQ3MiIgZD0iTTYzMyw4Ni4yYy0yNS45LDAtNDMuMywzLjctNTEuNCw2bC0wLjksMC4zdjExMi40bDIzLjksMGwwLTk1LjljOC4xLTEuOSwxNC41LTIuNSwyNy4yLTIuNQoJCQljMTkuNSwwLDMyLjYsNC45LDMyLjYsMjguOHY2OS41aDIzLjZ2LTY4LjRDNjg3LjksMTAzLjIsNjY5LjQsODYuMiw2MzMsODYuMnoiLz4KCQk8cGF0aCBmaWxsPSIjMDA2NDcyIiBkPSJNOTI2LjgsMTg0LjRjLTcuNywxLjctMTQuNywyLjMtMjcuMiwyLjNjLTIwLjEsMC0zMi42LTQuOC0zMi42LTI4LjZsMC02OS43bC0yMy42LDBsMCw2OC42CgkJCWMwLDMzLjIsMTguNSw1MC4xLDU0LjksNTAuMWMyNC40LDAsMzkuNi0zLDUxLjMtNmwxLTAuMmwwLTExMi41bC0yMy45LDBWMTg0LjR6Ii8+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiMwMDY0NzIiIGQ9Ik0zNDMuMyw4Ni4yYy0xNS42LDAtMjguNiwzLTM3LjMsOS4yYy0xMyw5LjItMTguMSwyMy4xLTE4LjEsNDEuMXY2OC40bDIzLjYsMGwwLTY5LjUKCQkJCWMwLTguNSwxLjctMTQuNiw0LjctMTguOWM1LjQtNy45LDE1LjMtOS45LDI3LjktOS45YzUuOSwwLDEyLjYsMC43LDE5LjIsMmw0LjctMTkuOUMzNjAuNiw4Ny4yLDM1Mi40LDg2LjIsMzQzLjMsODYuMnoiLz4KCQk8L2c+CgkJPHBhdGggZmlsbD0iIzAwNjQ3MiIgZD0iTTI2Ny40LDEzNS4yYy0yLjgtMzIuMS0yMS45LTQ4LjktNTUuOC00OC45Yy0zNi43LDAtNTYuMiwxOS44LTU2LjIsNTcuNGwwLDUuOQoJCQljMCwzNy42LDIxLjUsNTcuNCw2Mi4xLDU3LjRjMTYuNSwwLDMyLjItMi40LDQ1LjYtN2wtNS0xOS44bC0xLjEsMC40Yy03LjcsMi45LTIyLjEsNi4xLTM5LjUsNi4xYy0xNywwLTM3LjItNS40LTM3LjctMzAuNgoJCQlsODcuOSwwdi0xMi4zQzI2Ny43LDE0MC43LDI2Ny42LDEzNy45LDI2Ny40LDEzNS4yeiBNMjExLjYsMTA2LjZjMTQuMSwwLDMwLjgsNS4xLDMyLDI4LjZsLTYzLjcsMAoJCQlDMTgwLjgsMTE2LjUsMTkxLjcsMTA2LjYsMjExLjYsMTA2LjZ6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==';