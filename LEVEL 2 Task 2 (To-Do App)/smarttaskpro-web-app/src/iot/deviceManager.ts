export class DeviceManager {
    private devices: Map<string, any>;

    constructor() {
        this.devices = new Map();
    }

    connectDevice(deviceId: string, deviceData: any): void {
        this.devices.set(deviceId, deviceData);
        console.log(`Device ${deviceId} connected.`);
    }

    disconnectDevice(deviceId: string): void {
        if (this.devices.has(deviceId)) {
            this.devices.delete(deviceId);
            console.log(`Device ${deviceId} disconnected.`);
        } else {
            console.log(`Device ${deviceId} not found.`);
        }
    }

    sendCommand(deviceId: string, command: string): void {
        if (this.devices.has(deviceId)) {
            // Simulate sending a command to the device
            console.log(`Command "${command}" sent to device ${deviceId}.`);
        } else {
            console.log(`Device ${deviceId} not found.`);
        }
    }

    receiveData(deviceId: string): any {
        if (this.devices.has(deviceId)) {
            // Simulate receiving data from the device
            const data = { status: 'active', timestamp: new Date() };
            console.log(`Data received from device ${deviceId}:`, data);
            return data;
        } else {
            console.log(`Device ${deviceId} not found.`);
            return null;
        }
    }

    listDevices(): void {
        console.log('Connected devices:', Array.from(this.devices.keys()));
    }
}