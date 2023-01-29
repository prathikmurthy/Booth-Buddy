//sample text field
import 'package:flutter/material.dart';
import 'package:booth_buddy/screens/scanner.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';
import 'package:booth_buddy/screens/globals.dart';

class Page2 extends StatelessWidget {
  @override
  // Barcode? result;
  //print the result of the QR code
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Page 2"),
      ),
      body: Center(
        child: Text(scannedCodes.toString()),
      ),
    );
  }
}
