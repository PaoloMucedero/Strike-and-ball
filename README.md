# Strike & Ball

**Caso studio in sviluppo: dalla logica JavaScript a un gioco interattivo con React.**

Strike & Ball è un progetto di apprendimento pensato per il portfolio: documenta la costruzione incrementale di un piccolo gioco di deduzione, dalle prime funzioni provate in isolamento alla futura interfaccia completa.

L'obiettivo è esercitare il ragionamento sul codice, motivare le scelte e verificare ogni passaggio. Il progetto privilegia soluzioni semplici e comprensibili, senza introdurre strumenti che non servono alla fase corrente.

> Stato attuale: la logica di generazione e confronto è implementata. React genera e conserva la combinazione segreta nello stato del componente; la pagina mostra ancora soltanto il titolo. Non è ancora possibile giocare dall'interfaccia.

## Il gioco

Il giocatore deve indovinare una combinazione di **4 cifre diverse da 1 a 9**.

- **Strike**: cifra corretta nella posizione corretta.
- **Ball**: cifra presente nella combinazione, ma in una posizione diversa.
- Una cifra assente non assegna punti.

Con combinazione `1234` e tentativo `4271`, il risultato è **1 strike e 2 ball**. Una stessa cifra non deve essere conteggiata sia come strike sia come ball.

## Obiettivi del caso studio

- Usare array, cicli e condizioni per risolvere un problema concreto.
- Comprendere ambito delle variabili, contatori e valori restituiti dalle funzioni.
- Separare la logica del gioco dalla sua rappresentazione grafica.
- Gestire input e stato di una partita con React.
- Procedere per piccoli incrementi verificabili, documentando risultati e limiti.

## Percorso svolto

### 1. Confronto tra combinazioni

Il primo esercizio ha utilizzato combinazioni fisse per contare gli strike confrontando le cifre allo stesso indice. Il controllo dei ball è stato aggiunto come alternativa al controllo degli strike, evitando il doppio conteggio.

La logica è stata poi raccolta in `checkAttemptCombination`, che riceve due array e restituisce un oggetto con i contatori `strike` e `ball`.

### 2. Generazione casuale

`generateSecretCombination` costruisce un array di quattro cifre. Ogni estrazione produce un intero da 1 a 9; una cifra viene aggiunta soltanto se non è già presente. Il ciclo prosegue fino al completamento della combinazione.

### 3. Preparazione di React

È stato configurato un ambiente React con Vite e JavaScript. La pagina iniziale visualizza il titolo del gioco; l'aggiornamento nel browser al salvataggio del componente è stato verificato, così come la compilazione di produzione.

### 4. Separazione della logica

Il file `gameplay.js` contiene le due funzioni con export nominati raggruppati. Le chiamate di prova, i log e il vecchio codice commentato sono stati rimossi. La funzione di generazione è ora importata in React; quella di confronto sarà collegata quando verrà gestito l'invio dei tentativi.

### 5. Inizializzazione dello stato della partita

In `App.jsx`, `useState` conserva la combinazione segreta. La funzione `generateSecretCombination` viene passata come inizializzatore, senza chiamarla direttamente: React ne usa il risultato iniziale e mantiene lo stato nei render successivi.

Un ricaricamento completo della pagina inizializza nuovamente il componente. In sviluppo, `StrictMode` può chiamare due volte l'inizializzatore per i propri controlli, ignorando uno dei risultati. La funzione di aggiornamento `setSecretCombination` è predisposta per il futuro riavvio della partita, ma non viene ancora utilizzata.

Il valore generato è stato controllato manualmente nella console del browser; il log temporaneo è stato poi rimosso.

## Esperienza finale prevista

All'inizio di una partita verrà generata una combinazione, che rimarrà invariata durante tutti i turni. Il giocatore potrà inserire un tentativo, ricevere il risultato e consultare lo storico per dedurre la soluzione.

La partita terminerà con quattro strike oppure con l'esaurimento dei tentativi disponibili. Sarà possibile iniziare una nuova partita, azzerando lo stato e generando un nuovo codice.

### Roadmap

- [x] Implementare il confronto di strike e ball.
- [x] Generare quattro cifre casuali senza duplicati.
- [x] Preparare React e Vite.
- [x] Esportare le funzioni da un modulo separato.
- [x] Collegare la generazione del segreto al componente React.
- [x] Conservare il segreto nello stato della partita.
- [ ] Collegare il confronto alla gestione dei tentativi.
- [ ] Creare un modulo di inserimento del tentativo.
- [ ] Validare quattro cifre da 1 a 9, senza ripetizioni.
- [ ] Convertire l'input testuale in un array di numeri prima del confronto.
- [ ] Mostrare lo storico con strike e ball per ogni tentativo valido.
- [ ] Gestire vittoria, sconfitta e conclusione della partita.
- [ ] Aggiungere il riavvio della partita.
- [ ] Curare leggibilità, uso da tastiera e adattamento a schermi diversi.
- [ ] Verificare il flusso completo e aggiungere una schermata del gioco finito.

Il limite di **8 tentativi** è una proposta ancora da confermare. I tentativi non validi non dovranno consumare un turno.

## Tecnologie e scelte

- **JavaScript** per la logica e i componenti.
- **React** per l'interfaccia e lo stato della combinazione segreta.
- **Vite** per il server di sviluppo e la compilazione.
- **npm** per la gestione delle dipendenze.

La versione prevista funziona nel browser e non richiede backend, database o account. Le funzioni di gioco restano indipendenti da React per poter essere comprese e verificate separatamente.

## Avvio locale

Prerequisiti: Node.js e npm. Le dipendenze attuali richiedono Node.js `20.19+` nella serie 20 oppure `22.12+`; l'ambiente usato per la verifica iniziale è Node.js `24.13.0` con npm `11.6.2`.

Dopo aver scaricato o clonato il progetto, aprire un terminale nella sua cartella:

1. Eseguire `npm ci` per installare le versioni registrate nel lockfile.
2. Eseguire `npm run dev` per avviare il server di sviluppo.
3. Aprire l'indirizzo locale indicato dal terminale.

Per verificare la compilazione, eseguire `npm run build`. Il risultato viene creato in `dist/`. Dopo la compilazione, `npm run preview` consente di visualizzarlo localmente: non pubblica il sito online.

L'app va aperta tramite il server locale, non con un doppio clic su `index.html`. I comandi sono utilizzabili su macOS, Windows e Linux con un ambiente Node.js compatibile.

## Struttura attuale

| File | Responsabilità |
| --- | --- |
| `gameplay.js` | Generazione del segreto e confronto dei tentativi |
| `src/App.jsx` | Componente principale: stato del segreto e visualizzazione del titolo |
| `src/main.jsx` | Collegamento tra React e l'elemento radice della pagina |
| `index.html` | Documento HTML che ospita l'app |
| `vite.config.js` | Configurazione di Vite e del plugin React |
| `package.json` | Dipendenze e comandi disponibili |
| `package-lock.json` | Versioni risolte delle dipendenze, da conservare nella repository |

## Verifiche e limiti attuali

Sono state effettuate verifiche puntuali sulla generazione, sull'importazione delle funzioni e sul confronto, oltre alla compilazione e alla visualizzazione del titolo nel browser. Non è ancora presente una suite di test automatizzata.

Casi utili per verificare il confronto, con segreto `1234`:

| Tentativo | Strike attesi | Ball attesi |
| --- | ---: | ---: |
| `1234` | 4 | 0 |
| `4321` | 0 | 4 |
| `5678` | 0 | 0 |
| `4271` | 1 | 2 |

Il confronto presuppone array di quattro numeri validi e senza duplicati. Non valida ancora gli input: questo controllo sarà necessario prima di collegare il modulo di inserimento.

Il segreto di gioco non è una credenziale: in un'app eseguita interamente nel browser può essere ispezionato tramite gli strumenti di sviluppo. Il progetto è un gioco didattico, non un sistema competitivo protetto da manipolazioni.

## File locali e pubblicazione

Il file `.gitignore` esclude dipendenze installate, build generate, log, file del sistema operativo, configurazioni locali dell'editor e comuni file di credenziali. I file `.env` e le loro varianti sono esclusi; un eventuale `.env.example` deve contenere soltanto valori dimostrativi non sensibili.

Attualmente l'app non richiede variabili d'ambiente o chiavi API. Eventuali variabili esposte al client tramite Vite non devono contenere segreti.

Prima della pubblicazione occorre controllare i file effettivamente inclusi nel commit: `.gitignore` non rimuove dati già tracciati da Git e non riconosce automaticamente segreti inseriti nel codice. Il lockfile viene invece condiviso per rendere riproducibile l'installazione.
