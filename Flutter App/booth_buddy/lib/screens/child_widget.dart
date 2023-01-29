import 'package:booth_buddy/screens/scanner.dart';
import 'package:flutter/material.dart';
//import 'package:booth_buddy/screens/page1.dart';
import 'package:booth_buddy/screens/page2.dart';
import 'package:booth_buddy/screens/page3.dart';
import 'package:booth_buddy/screens/form.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';
import 'package:booth_buddy/screens/dataTable.dart';

class ChildWidget extends StatelessWidget {
  final AvailableNumber number;
  //create global variable "data"

  const ChildWidget({Key? key, required this.number}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    if (number == AvailableNumber.First) {
      return Container(
        height: 100,
        width: 100,
        child: QRViewExample(),
      );
    } else if (number == AvailableNumber.Second) {
      return Container(
        alignment: Alignment.center,
        height: 500,
        width: 300,
        child: dataTableApp(),
      );
    } else {
      return Container(
        height: 500,
        width: 300,
        child: form(),
      );
    }

    // return SafeArea(
    //   child: Padding(
    //     padding: const EdgeInsets.all(8.0),
    //     child: Column(
    //       mainAxisAlignment: MainAxisAlignment.center,
    //       children: <Widget>[
    //         Text(
    //           "$file screen",
    //           style: TextStyle(fontSize: 36.0),
    //         ),
    //         Flexible(child: Image.asset("assets/undraw/$file.png")),
    //         if (number == AvailableNumber.First)
    //           //include page1.dart
    //           Page1()
    //         else if (number == AvailableNumber.Second)
    //           Page2()
    //         else if (number == AvailableNumber.Third)
    //           form()
    //       ],
    //     ),
    //   ),
    // );
  }
}

enum AvailableNumber { First, Second, Third }
