import 'package:flutter/material.dart';

import 'package:booth_buddy/screens/globals.dart';

//hi
class dataTableApp extends StatelessWidget {
  const dataTableApp({super.key});

  static const String _title = 'Hi! Here are your visited events!';
  //center the title


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
        brightness: Brightness.dark,
      ),
      home: Scaffold(
        appBar: AppBar(title: const Text(_title)),
        body: MyStatelessWidget(),
      ),
    );
  }
}

class MyStatelessWidget extends StatelessWidget {
  MyStatelessWidget({super.key});
  //convert set scannedCodes to list of strings
  List<String> dataSet = scannedCodes.toList();
  @override
  Widget build(BuildContext context) {
    List<DataRow> dataRows = [];
    for (var data in dataSet) {
      List<String> splitData = data.split(';');
      processedCodes.add(splitData[1]);
      dataRows.add(
        DataRow(
          cells: <DataCell>[
            DataCell(Text(splitData[0],
                style: TextStyle(fontSize: 20.0), textAlign: TextAlign.center)),
            DataCell(
              Text(splitData[1],
                  style: TextStyle(
                    fontSize: 20.0,
                  ),
                  textAlign: TextAlign.center),
            ),
            DataCell(
              Text("✅",
                  style: TextStyle(
                    fontSize: 20.0,
                  ),
                  textAlign: TextAlign.center),
            ),
          ],
        ),
      );
    }
    return DataTable(
      // center columns
      headingRowHeight: 70,
      dataRowHeight: 70,
      horizontalMargin: (MediaQuery.of(context).size.width - 10) / 5,
      columnSpacing: (MediaQuery.of(context).size.width - 30) / 5,
      columns: const <DataColumn>[
        DataColumn(
          label: Expanded(
            child: Text(
              'Name',
              style: TextStyle(fontStyle: FontStyle.italic),
              textAlign: TextAlign.center,
            ),
          ),
        ),
        DataColumn(
          label: Expanded(
            child: Text(
              'ID',
              style: TextStyle(fontStyle: FontStyle.italic),
              textAlign: TextAlign.center,
            ),
          ),
        ),
        DataColumn(
          label: Expanded(
            child: Text(
              'Status',
              style: TextStyle(fontStyle: FontStyle.italic),
              textAlign: TextAlign.center,
            ),
          ),
        ),
      ],
      rows: dataRows,
    );
  }
}
