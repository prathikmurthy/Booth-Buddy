// import 'dart:io';

// import 'package:flutter/foundation.dart';
// import 'package:flutter/material.dart';
// import 'package:qr_code_scanner/qr_code_scanner.dart';


// class QRScanPage extends StatefulWidget {
//   @override
//   State<StatefulWidget> createState() => _QRScanPageState();
// }




// class _QRScanPageState extends State<QRScanPageState> {
//   final qrKey = GlobalKey(debugLabel: 'QR');  

//   QRViewController? controller;

//   @override
//   void dispose() {
//     controller?.dispose();
//     super.dispose();
//   }


//   @override
//   Widget build(BuildContext context) => SafeArea(
//     child: Scaffold(
//       body: Stack(
//         alignment: Alignment.center,
//         children: <Widget>[
//           buildQrView(context),
//         ]
//       )
//     )
//   )

//   Widget buildQrView(BuildContext context) => QRView(
//     key: qrKey,
//     onQRViewCreated: onQRViewCreated,
//     overlay: QrScannerOverlayShape(
//       borderRadius: 10,
//       borderLength: 20,
//       borderWidth: 10,
//       cutOutSize: MediaQuery.of(context).size.width * 0.8,
//       )
//   );

//   void onQRViewCreated(QRViewController controller) {
//     setState(() => this.controller = controller);
//     // controller.scannedDataStream.listen((scanData) {
//     //   setState(() {
//     //     print(scanData.code);
//     //   });
//     // });
//   }

// }

