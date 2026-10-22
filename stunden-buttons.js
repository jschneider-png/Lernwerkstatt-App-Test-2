/* ============================================================
   SANITÄRTECHNIK 11 – STUNDEN-BUTTONS
   ============================================================
   NUR DIESE DATEI MUSST DU SPÄTER FÜR MATERIAL-LINKS BEARBEITEN.

   Struktur:
   Blockwoche -> Stunde -> beliebig viele Buttons

   Für einen weiteren Button einfach innerhalb von "buttons" ergänzen:

   {
     titel: '🎬 Erklärvideo',
     beschreibung: 'Kurze Erklärung zum Thema.',
     link: 'https://...'
   },

   Ein leeres link: '' zeigt den Button als "Noch nicht hinterlegt".
   ============================================================ */

const STUNDEN_BUTTONS = {

  /* ==========================================================
     BLOCKWOCHE 1: Trinkwasser allgemein
     ========================================================== */
  1: {

    /* Stunde 1: Trinkwasser allgemein – Grundlagen */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: 'https://lernplattform.bycs.de/mod/folder/view.php?id=101473966'
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: 'https://lernplattform.bycs.de/mod/url/view.php?id=101590195'
        }
      ]
    },

    /* Stunde 2: Anforderungen an Trinkwasser */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: 'https://lernplattform.bycs.de/mod/folder/view.php?id=101473969'
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
          {
    titel: '📁 Unterrichtsmaterial',
    beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
    link: 'https://lernplattform.bycs.de/mod/folder/view.php?id=101473975'
  },
      ]
    },

    /* Stunde 3: Trinkwasserversorgung im Überblick */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: 'https://lernplattform.bycs.de/mod/folder/view.php?id=101473990'
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: 'https://lernplattform.bycs.de/mod/resource/view.php?id=101473984'
        }
      ]
    },

    /* Stunde 4: Trinkwassergewinnung */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: 'https://lernplattform.bycs.de/mod/folder/view.php?id=101473987'
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 2: Eigenschaften von Trinkwasser
     ========================================================== */
  2: {

    /* Stunde 1: Eigenschaften von Trinkwasser */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: 'https://lernplattform.bycs.de/mod/folder/view.php?id=101473972'
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Wasserhärte */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: 'https://lernplattform.bycs.de/mod/folder/view.php?id=101503969'
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: 'https://lernplattform.bycs.de/mod/hvp/view.php?id=103025867'
        }
      ]
    },

    /* Stunde 3: Der pH-Wert */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: 'https://lernplattform.bycs.de/mod/folder/view.php?id=103030946'
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: 'https://lernplattform.bycs.de/mod/hvp/view.php?id=103030181'
        }
      ]
    },

    /* Stunde 4: Trinkwasserbehandlung */
    4: {
       buttons: [
    {
      titel: '📁 Unterrichtsmaterial',
      beschreibung: 'Interaktive Lernwerkstatt zur Trinkwasserbehandlung mit Wegweiser, Aufgaben und Timer.',
      link: 'https://jschneider-png.github.io/Lernwerkstatt-Sanit-rtechnik-11/lernlabor/trinkwasserbehandlung.html'
    },
    {
      titel: '➕ Zusatzmaterial',
      beschreibung: 'Interaktive Vertiefung: Filterarten, Aufbau, Rückspülung und Instandhaltung.',
      link: 'https://jschneider-png.github.io/Lernwerkstatt-Sanit-rtechnik-11/lernlabor/filter.html'
    }
  ]
}

  },

  /* ==========================================================
     BLOCKWOCHE 3: Trinkwasserversorgung & Installation
     ========================================================== */
  3: {

    /* Stunde 1: Trinkwasserversorgung */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Trinkwasserbehandlung */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Trinkwasserinstallation */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Schutz des Trinkwassers */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 4: Trinkwasserinstallation & Schutz
     ========================================================== */
  4: {

    /* Stunde 1: Trinkwasserversorgung – Vertiefung */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Trinkwasserbehandlung – Vertiefung */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Trinkwasserinstallation – Vertiefung */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Schutz des Trinkwassers – Vertiefung */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 5: Druck, Druckverluste & Volumenstrom
     ========================================================== */
  5: {

    /* Stunde 1: Druck */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Druckverluste */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Volumenstrom */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Anwendung / Berechnung */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 6: Abwasser – Lüftung & Gefälle
     ========================================================== */
  6: {

    /* Stunde 1: Abwasser – Grundlagen */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Lüftungsleitung */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Gefälle */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Eine unangenehme Sache – Abwasser */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 7: Abwasser – Grundlagen & Dimensionierung I
     ========================================================== */
  7: {

    /* Stunde 1: Abwasser – Grundlagen */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Entwässerungsgegenstände */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Leitungsarten */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Dimensionierung – Einstieg */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 8: Abwasser – Grundlagen & Dimensionierung II
     ========================================================== */
  8: {

    /* Stunde 1: Abwasser – Grundlagen vertiefen */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Anschlussleitungen */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Sammelleitungen */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Dimensionierung – Übung */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 9: Abwasser – Grundlagen & Dimensionierung III
     ========================================================== */
  9: {

    /* Stunde 1: Abwasser – Systemübersicht */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Gefälle und Fließverhalten */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Lüftung im Abwassersystem */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Dimensionierung – Anwendung */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 10: Abwasser – Grundlagen & Dimensionierung IV
     ========================================================== */
  10: {

    /* Stunde 1: Abwasser – Planung */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Rohrführung */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Bemessung */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Dimensionierung – Kundenauftrag */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 11: Abwasser – Grundlagen & Dimensionierung V
     ========================================================== */
  11: {

    /* Stunde 1: Abwasser – Wiederholung */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Dimensionierung – Vertiefung */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Fehler erkennen */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Praxisaufgabe */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  },

  /* ==========================================================
     BLOCKWOCHE 12: Abwasser – Grundlagen & Dimensionierung VI
     ========================================================== */
  12: {

    /* Stunde 1: Abwasser – Gesamtwiederholung */
    1: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 2: Dimensionierung – Gesamtaufgabe */
    2: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 3: Anwendung / Prüfungsvorbereitung */
    3: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    },

    /* Stunde 4: Abschluss / Lernerfolgssicherung */
    4: {
      buttons: [
        {
          titel: '📁 Unterrichtsmaterial',
          beschreibung: 'Arbeitsblätter, Präsentationen, Aufgaben oder Unterrichtsunterlagen.',
          link: ''
        },
        {
          titel: '➕ Zusatzmaterial',
          beschreibung: 'Vertiefungen, Hilfen, Videos oder ergänzende Materialien.',
          link: ''
        }
      ]
    }

  }

};
