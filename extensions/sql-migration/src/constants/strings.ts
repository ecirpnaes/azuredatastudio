/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureAccount } from 'azurecore';
import * as nls from 'vscode-nls';
const localize = nls.loadMessageBundle();


// #region wizard
export const WIZARD_TITLE = localize('sql-migration.wizard.title', "SQL Migration Wizard");
export const SOURCE_CONFIGURATION_PAGE_TITLE = localize('sql.migration.wizard.source_configuration.title', "SQL Source Configuration");
// //#endregion

export const COLLECTING_SOURCE_CONFIGURATIONS = localize('sql.migration.collecting_source_configurations', "Collecting source configurations");
export const COLLECTING_SOURCE_CONFIGURATIONS_INFO = localize('sql.migration.collecting_source_configurations.info', "We need to collect some information about how your data is configured currently.\nThis may take some time.");
export const COLLECTING_SOURCE_CONFIGURATIONS_ERROR = (error: string = ''): string => {
	return localize('sql.migration.collecting_source_configurations.error', "There was an error when gathering information about your data configuration. {0}", error);
};

export const SKU_RECOMMENDATION_PAGE_TITLE = localize('sql.migration.wizard.sku.title', "Azure SQL Target Selection");
export const SKU_RECOMMENDATION_ALL_SUCCESSFUL = (databaseCount: number): string => {
	return localize('sql.migration.wizard.sku.all', "Based on the results of our source configuration scans, all {0} of your databases can be migrated to Azure SQL.", databaseCount);
};
export const SKU_RECOMMENDATION_SOME_SUCCESSFUL = (migratableCount: number, databaseCount: number): string => {
	return localize('sql.migration.wizard.sku.some', "Based on the results of our source configuration scans, {0} out of {1} of your databases can be migrated to Azure SQL.", migratableCount, databaseCount);
};
export const SKU_RECOMMENDATION_CHOOSE_A_TARGET = localize('sql.migration.wizard.sku.choose_a_target', "Choose a target Azure SQL");

export const SKU_RECOMMENDATION_NONE_SUCCESSFUL = localize('sql.migration.sku.none', "Based on the results of our source configuration scans, none of your databases can be migrated to Azure SQL.");
export const SKU_RECOMMENDATION_MI_CARD_TEXT = localize('sql.migration.sku.mi.card.title', "Azure Managed Instance (Microsoft managed)");
export const SKU_RECOMMENDATION_VM_CARD_TEXT = localize('sql.migration.sku.vm.card.title', "Azure SQL Virtual Machine (Customer managed)'");

export const SUBSCRIPTION_SELECTION_PAGE_TITLE = localize('sql.migration.wizard.subscription.title', "Azure Subscription Selection");
export const SUBSCRIPTION_SELECTION_AZURE_ACCOUNT_TITLE = localize('sql.migration.wizard.subscription.azure.account.title', "Azure Account");
export const SUBSCRIPTION_SELECTION_AZURE_SUBSCRIPTION_TITLE = localize('sql.migration.wizard.subscription.azure.subscription.title', "Azure Subscription");
export const SUBSCRIPTION_SELECTION_AZURE_PRODUCT_TITLE = localize('sql.migration.wizard.subscription.azure.product.title', "Azure Product");

export const ASSESSMENT_COMPLETED = (serverName: string): string => {
	return localize('sql.migration.generic.congratulations', "We have completed the assessment of your SQL Server Instance '{0}'.", serverName);
};

// Accounts page
export const ACCOUNTS_SELECTION_PAGE_TITLE = localize('sql.migration.wizard.account.title', "Azure Account");
export const ACCOUNTS_SELECTION_PAGE_DESCRIPTION = localize('sql.migration.wizard.account.description', "Select an Azure account linked to Azure Data Studio or link one now.");
export const ACCOUNT_SELECTION_PAGE_NO_LINKED_ACCOUNTS_ERROR = localize('sql.migration.wizard.account.noaccount.error', "There is no linked account. Please add an account.");
export const ACCOUNT_LINK_BUTTON_LABEL = localize('sql.migration.wizard.account.add.button.label', "Link account");
export function accountLinkedMessage(count: number): string {
	return count === 1 ? localize('sql.migration.wizard.account.count.single.message', '{0} account linked', count) : localize('sql.migration.wizard.account.count.multiple.message', '{0} accounts linked', count);
}
export const AZURE_TENANT = localize('sql.migration.azure.tenant', "Azure AD tenant");
export function ACCOUNT_STALE_ERROR(account: AzureAccount) {
	return localize('azure.accounts.accountStaleError', "The access token for selected account '{0}' is no longer valid. Please click the 'Link Account' button and refresh the account or select a different account.", `${account.displayInfo.displayName} (${account.displayInfo.userId})`);
}

// database backup page
export const DATABASE_BACKUP_PAGE_TITLE = localize('sql.migration.database.page.title', "Database Backup");
export const DATABASE_BACKUP_PAGE_DESCRIPTION = localize('sql.migration.database.page.description', "Select the location where we can find your database backups (Full, Differential and Log) to use for migration.");
export const DATABASE_BACKUP_NC_NETWORK_SHARE_RADIO_LABEL = localize('sql.migration.nc.network.share.radio.label', "My database backups are on a network share");
export const DATABASE_BACKUP_NC_NETWORK_SHARE_HELP_TEXT = localize('sql.migration.network.share.help.text', "Enter network share information");
export const DATABASE_BACKUP_NC_BLOB_STORAGE_RADIO_LABEL = localize('sql.migration.nc.blob.storage.radio.label', "My database backups are in an Azure Storage Blob Container");
export const DATABASE_BACKUP_NC_FILE_SHARE_RADIO_LABEL = localize('sql.migration.nc.file.share.radio.label', "My database backups are in an Azure Storage File Share");
export const DATABASE_BACKUP_NETWORK_SHARE_LOCATION_LABEL = localize('sql.migration.network.share.location.label', "Network share location to read backups from.");
export const DATABASE_BACKUP_NETWORK_SHARE_WINDOWS_USER_LABEL = localize('sql.migration.network.share.windows.user.label', "Windows user account with read access to the network share location.");
export const DATABASE_BACKUP_NETWORK_SHARE_PASSWORD_LABEL = localize('sql.migration.network.share.password.label', "Password");
export const DATABASE_BACKUP_NETWORK_SHARE_PASSWORD_PLACEHOLDER = localize('sql.migration.network.share.password.placeholder', "Enter password");
export const DATABASE_BACKUP_NETWORK_SHARE_AZURE_ACCOUNT_HELP = localize('sql.migration.network.share.azure.help', "Select the storage account where backup files will be copied to during migration");
export const DATABASE_BACKUP_NETWORK_SHARE_SUBSCRIPTION_LABEL = localize('sql.migration.network.share.subscription.label', "Select the subscription that contains the storage account.");
export const DATABASE_BACKUP_SUBSCRIPTION_PLACEHOLDER = localize('sql.migration.network.share.subscription.placeholder', "Select subscription");
export const DATABASE_BACKUP_NETWORK_SHARE_NETWORK_STORAGE_ACCOUNT_LABEL = localize('sql.migration.network.share.storage.account.label', "Select the storage account where backup files will be copied.");
export const DATABASE_BACKUP_STORAGE_ACCOUNT_PLACEHOLDER = localize('sql.migration.network.share.storage.account.placeholder', "Select account");
export const DATABASE_BACKUP_BLOB_STORAGE_SUBSCRIPTION_LABEL = localize('sql.migration.blob.storage.subscription.label', "Select the subscription that contains the storage account.");
export const DATABASE_BACKUP_BLOB_STORAGE_ACCOUNT_LABEL = localize('sql.migration.blob.storage.account.label', "Select the storage account that contains the backup files.");
export const DATABASE_BACKUP_BLOB_STORAGE_ACCOUNT_CONTAINER_LABEL = localize('sql.migration.blob.storage.container.label', "Select the container that contains the backup files.");
export const DATABASE_BACKUP_BLOB_STORAGE_ACCOUNT_CONTAINER_PLACEHOLDER = localize('sql.migration.blob.storage.container.placeholder', "Select container");
export const DATABASE_BACKUP_FILE_SHARE_SUBSCRIPTION_LABEL = localize('sql.migration.file.share.subscription.label', "Select the subscription that contains the file share.");
export const DATABASE_BACKUP_FILE_SHARE_STORAGE_ACCOUNT_LABEL = localize('sql.migration.file.share.storage.account.label', "Select the storage account that contains the file share.");
export const DATABASE_BACKUP_FILE_SHARE_LABEL = localize('sql.migration.file.share.label', "Select the file share that contains the backup files.");
export const DATABASE_BACKUP_FILE_SHARE_PLACEHOLDER = localize('sql.migration.file.share.placeholder', "Select share");
export const DATABASE_BACKUP_MIGRATION_MODE_LABEL = localize('sql.migration.database.migration.mode.label', "Migration mode");
export const DATABASE_BACKUP_MIGRATION_MODE_DESCRIPTION = localize('sql.migration.database.migration.mode.description', "Choose from the following migration modes to migrate to your Azure SQL target based on your downtime requirements.");
export const DATABASE_BACKUP_MIGRATION_MODE_ONLINE_LABEL = localize('sql.migration.database.migration.mode.online.label', "Online migration: Application downtime is limited to cut over at the end of migration.");
export const DATABASE_BACKUP_MIGRATION_MODE_OFFLINE_LABEL = localize('sql.migration.database.migration.mode.offline.label', "Offline migration: Application downtime will start when the migration starts.");
export const DATABASE_BACKUP_EMAIL_NOTIFICATION_LABEL = localize('sql.migration.database.backup.email.notification.label', "Email notifications");
export const DATABASE_BACKUP_EMAIL_NOTIFICATION_CHECKBOX_LABEL = localize('sql.migration.database.backup.email.notification.checkbox.label', "Notify me when migration is complete");
export const NO_SUBSCRIPTIONS_FOUND = localize('sql.migration.no.subscription.found', "No subscription found");
export const NO_STORAGE_ACCOUNT_FOUND = localize('sql.migration.no.storageAccount.found', "No storage account found");
export const NO_FILESHARES_FOUND = localize('sql.migration.no.fileShares.found', "No file shares found");
export const NO_BLOBCONTAINERS_FOUND = localize('sql.migration.no.blobContainers.found', "No blob containers found");
export const INVALID_SUBSCRIPTION_ERROR = localize('sql.migration.invalid.subscription.error', "Please select a valid subscription to proceed.");
export const INVALID_STORAGE_ACCOUNT_ERROR = localize('sql.migration.invalid.storageAccount.error', "Please select a valid storage account to proceed.");
export const INVALID_FILESHARE_ERROR = localize('sql.migration.invalid.fileShare.error', "Please select a valid file share to proceed.");
export const INVALID_BLOBCONTAINER_ERROR = localize('sql.migration.invalid.blobContainer.error', "Please select a valid blob container to proceed.");
export const INVALID_NETWORK_SHARE_LOCATION = localize('sql.migration.invalid.network.share.location', "Invalid network share location format. Example: {0}", '\\\\Servername.domainname.com\\Backupfolder');
export const INVALID_USER_ACCOUNT = localize('sql.migration.invalid.user.account', "Invalid user account format. Example: {0}", 'Domain\\username');
export function TARGET_NAME_FOR_DATABASE(dbName: string): string {
	return localize('sql.migration.target.name.for.database', 'Target name for database ‘{0}’', dbName);
}
export function TARGET_NETWORK_SHARE_LOCATION(dbName: string): string {
	return localize('sql.migration.network.share.location', "Network share location to read backups for database ‘{0}’", dbName);
}
export function TARGET_FILE_SHARE(dbName: string): string {
	return localize('sql.migration.file.share', "Select the file share that contains the backup files for ‘{0}’", dbName);
}
export function TARGET_BLOB_CONTAINER(dbName: string): string {
	return localize('sql.migration.blob.container', "Select the container that contains the backup files for ‘{0}’", dbName);
}
export const ENTER_NETWORK_SHARE_INFORMATION = localize('sql.migration.enter.network.share.information', "Enter network share path information for selected databases");
export const ENTER_BLOB_CONTAINER_INFORMATION = localize('sql.migration.blob.container.information', "Enter the target name and select the blob container location for selected databases");
export const ENTER_FILE_SHARE_INFORMATION = localize('sql.migration.enter.file.share.information', "Enter the target name and select the file share location of selected databases");

// integration runtime page
export const IR_PAGE_TITLE = localize('sql.migration.ir.page.title', "Azure Database Migration Service");
export const IR_PAGE_DESCRIPTION = localize('sql.migration.ir.page.description', "Azure Database Migration Service (DMS) orchestrates database migration activities and tracks their progress. You can select an existing DMS for Azure SQL target if you have created one previously or create a new one below. {0}");
export const IR_PAGE_NOTE = localize('sql.migration.ir.page.note', "Note: DMS will run in your Azure subscription in the chosen resource group and does not incur any cost for running it.");
export const SELECT_A_SQL_MIGRATION_SERVICE = localize('sql.migration.select.a.migration.service', "Select Azure Data Migration Service");
export const DEFAULT_SETUP_BUTTON = localize('sql.migration.default.setup.button', "Setup with defaults: Add DMS with one click express setup using default options.");
export const CUSTOM_SETUP_BUTTON = localize('sql.migration.custom.setup.button', "Custom setup: Add DMS after customizing most options.");
export const SQL_MIGRATION_SERVICE_NOT_FOUND_ERROR = localize('sql.migration.ir.page.sql.migration.service.not.found', "No DMS found. Please create a new one");
export const CREATE_NEW = localize('sql.migration.create.new', "Create new");
export const INVALID_SERVICE_ERROR = localize('sql.migration.invalid.migration.service.error', "Please select a valid DMS");
export const SERVICE_OFFLINE_ERROR = localize('sql.migration.invalid.migration.service.offline.error', "Please select a DMS that is connected to a node");
export const AUTHENTICATION_KEYS = localize('sql.migration.authentication.types', "Authentication Keys");
export function SQL_MIGRATION_SERVICE_DETAILS_HEADER(sqlMigrationServiceName: string) {
	return localize('sql.migration.service.header', "Azure Data Migration Service \"{0}\" details:`", sqlMigrationServiceName);
}

// create migration service dialog
export const CREATE_MIGRATION_SERVICE_TITLE = localize('sql.migration.services.dialog.title', "Create Azure Data Migration Service");
export const MIGRATION_SERVICE_DIALOG_DESCRIPTION = localize('sql.migration.services.container.description', "Enter the information below to add a new Azure Data Migration Service.");
export const LOADING_MIGRATION_SERVICES = localize('sql.migration.service.container.loading.help', "Loading Migration Services");
export const CREATE_SERVICE_FORM_HEADING = localize('sql.migration.service.dialog.create.service.form.heading', "Enter the information below to add a new Migration Service.");
export const SERVICE_CONTAINER_HEADING = localize('sql.migration.service.container.heading', "Setup Integration Runtime");
export const SERVICE_CONTAINER_DESCRIPTION = localize('sql.migration.service.container.container.description', "Follow the instructions below to setup self-hosted Integration Runtime.");
export const SERVICE_STEP1 = localize('sql.migration.ir.setup.step1', "Step 1: {0}");
export const SERVICE_STEP1_LINK = localize('sql.migration.option', "Download and install integration runtime");
export const SERVICE_STEP2 = localize('sql.migration.ir.setup.step2', "Step 2: Use this key to register your integration runtime");
export const SERVICE_STEP3 = localize('sql.migration.ir.setup.step3', "Step 3: Check connection");
export const SERVICE_CONNECTION_STATUS = localize('sql.migration.connection.status', "Connection Status");
export const SERVICE_KEY1_LABEL = localize('sql.migration.key1.label', "Key 1");
export const SERVICE_KEY2_LABEL = localize('sql.migration.key2.label', "Key 2");
export const SERVICE_KEY_COPIED_HELP = localize('sql.migration.key.copied', "Key copied");
export const REFRESH_KEYS = localize('sql.migration.refresh.keys', "Refresh keys");
export const COPY_KEY = localize('sql.migration.copy.key', "Copy key");
export const AUTH_KEY_COLUMN_HEADER = localize('sql.migration.authkeys.header', "Authentication key");
export function SERVICE_NOT_READY(serviceName: string): string {
	return localize('sql.migration.service.not.ready', "Azure Data Migration Service is not registered. Azure Data Migration Service '{0}' needs to be registered with self-hosted Integration Runtime on any node.", serviceName);
}
export function SERVICE_READY(serviceName: string, host: string): string {
	return localize('sql.migration.service.ready', "Azure Data Migration Service '{0}' is connected to self-hosted Integration Runtime running on the node - {1}", serviceName, host);
}
export const RESOURCE_GROUP_NOT_FOUND = localize('sql.migration.resource.group.not.found', "No resource Groups found");
export const INVALID_RESOURCE_GROUP_ERROR = localize('sql.migration.invalid.resourceGroup.error', "Please select a valid resource group to proceed.");
export const INVALID_REGION_ERROR = localize('sql.migration.invalid.region.error', "Please select a valid region to proceed.");
export const INVALID_SERVICE_NAME_ERROR = localize('sql.migration.invalid.service.name.error', "Please enter a valid name for the Migration Service.");
export const SERVICE_NOT_FOUND = localize('sql.migration.service.not.found', "No Migration Services found. Please create a new one.");
export const SERVICE_NOT_SETUP_ERROR = localize('sql.migration.service.not.setup', "Please add a Migration Service to proceed.");
export const MANAGED_INSTANCE = localize('sql.migration.managed.instance', "Azure SQL managed instance");
export const NO_MANAGED_INSTANCE_FOUND = localize('sql.migration.no.managedInstance.found', "No managed instance found");
export const NO_VIRTUAL_MACHINE_FOUND = localize('sql.migration.no.virtualMachine.found', "No virtual machine found");
export const TARGET_SELECTION_PAGE_TITLE = localize('sql.migration.target.page.title', "Choose the target Azure SQL");

// common strings
export const LEARN_MORE = localize('sql.migration.learn.more', "Learn more");
export const SUBSCRIPTION = localize('sql.migration.subscription', "Subscription");
export const RESOURCE_GROUP = localize('sql.migration.resourceGroups', "Resource group");
export const REGION = localize('sql.migration.region', "Region");
export const NAME = localize('sql.migration.name', "Name");
export const LOCATION = localize('sql.migration.location', "Location");
export const NEW = localize('sql.migration.new', "New");
export const FEATURE_NOT_AVAILABLE = localize('sql.migration.feature.not.available', "This feature is not available yet.");
export const REFRESH = localize('sql.migration.refresh', "Refresh");
export const SUBMIT = localize('sql.migration.submit', "Submit");
export const CREATE = localize('sql.migration.create', "Create");
export const CANCEL = localize('sql.migration.cancel', "Cancel");
export const TYPE = localize('sql.migration.type', "Type");
export const PATH = localize('sql.migration.path', "Path");
export const USER_ACCOUNT = localize('sql.migration.path.user.account', "User Account");
export const VIEW_ALL = localize('sql.migration.view.all', "View All");

//Summary Page
export const SUMMARY_PAGE_TITLE = localize('sql.migration.summary.page.title', "Summary");
export const AZURE_ACCOUNT_LINKED = localize('sql.migration.summary.azure.account.linked', "Azure account linked");
export const MIGRATION_TARGET = localize('sql.migration.summary.migration.target', "Migration target");
export const SUMMARY_MI_TYPE = localize('sql.migration.summary.mi.type', "Azure SQL Managed Instance");
export const SUMMARY_VM_TYPE = localize('sql.migration.summary.vm.type', "Azure SQL Virtual Machine");
export const SUMMARY_DATABASE_COUNT_LABEL = localize('sql.migration.summary.database.count', "Number of database to be migrated");
export const SUMMARY_AZURE_STORAGE_SUBSCRIPTION = localize('sql.migration.summary.azure.storage.subscription', "Azure storage subscription");
export const SUMMARY_AZURE_STORAGE = localize('sql.migration.summary.azure.storage', "Azure storage");
export const SUMMARY_IR_NODE = localize('sql.migration.ir.node', "Integration Runtime node");
export const NETWORK_SHARE = localize('sql.migration.network.share', "Network Share");
export const BLOB_CONTAINER = localize('sql.migration.blob.container.title', "Blob Container");
export const FILE_SHARE = localize('sql.migration.file.share.title', "File Share");
export const MIGRATION_STARTED = localize('sql.migration.started.notification', "Migration in progress");

// Open notebook quick pick string
export const NOTEBOOK_QUICK_PICK_PLACEHOLDER = localize('sql.migration.quick.pick.placeholder', "Select the operation you'd like to perform");
export const NOTEBOOK_INLINE_MIGRATION_TITLE = localize('sql.migration.inline.migration.notebook.title', "Inline migration");
export const NOTEBOOK_SQL_MIGRATION_ASSESSMENT_TITLE = localize('sql.migration.sql.assessment.notebook.title', "SQL migration assessment");
export const NOTEBOOK_OPEN_ERROR = localize('sql.migration.notebook.open.error', "Error opening migration notebook");

// Dashboard
export const DASHBOARD_TITLE = localize('sql.migration.dashboard.title', "Azure SQL Migration");
export const DASHBOARD_DESCRIPTION = localize('sql.migration.dashboard.description', "Determine the migration readiness of your SQL Server instances, identify a recommended Azure SQL target, and complete the migration of your SQL Server instance to Azure SQL Managed Instance or SQL Server on Azure Virtual Machines.");
export const DASHBOARD_MIGRATE_TASK_BUTTON_TITLE = localize('sql.migration.dashboard.migrate.task.button', "Migrate to Azure SQL");
export const DASHBOARD_MIGRATE_TASK_BUTTON_DESCRIPTION = localize('sql.migration.dashboard.migrate.task.button.description', "Migrate SQL Server instance to Azure SQL.");
export const DATABASE_MIGRATION_STATUS = localize('sql.migration.database.migration.status', "Database Migration Status");
export const HELP_VIDEO1_TITLE = localize('sql.migration.dashboard.video1.title', "Migrate SQL Server to SQL Managed Instance");
export const HELP_VIDEO2_TITLE = localize('sql.migration.dashboard.video2.title', "Migrate SQL Server to SQL Virtual Machine");
export const HELP_LINK1_TITLE = localize('sql.migration.dashboard.link1.title', "Migrating your SQL Server to cloud");
export const HELP_LINK1_DESCRIPTION = localize('sql.migration.dashboard.link1.description', "Lorem ipsum dolor sit amet, consectetur adipi. Lorem ipsum dolor sit amet, consectetur adipi. Lorem ipsum.");
export const HELP_TITLE = localize('sql.migration.dashboard.help.title', "Help Articles and Video Links");
export const PRE_REQ_TITLE = localize('sql.migration.pre.req.title', "Things you need before starting migration:");
export const PRE_REQ_1 = localize('sql.migration.pre.req.1', "Azure account details");
export const PRE_REQ_2 = localize('sql.migration.pre.req.2', "Azure SQL Managed Instance or SQL Server on Azure Virtual Machine");
export const PRE_REQ_3 = localize('sql.migration.pre.req.3', "Backup location details");
export const MIGRATION_IN_PROGRESS = localize('sql.migration.migration.in.progress', "Migration in progress");
export const LOG_SHIPPING_IN_PROGRESS = localize('sql.migration.log.shipping.in.progress', "Log shipping in progress");
export const MIGRATION_COMPLETED = localize('sql.migration.migration.completed', "Migration completed");
export const SUCCESSFULLY_MIGRATED_TO_AZURE_SQL = localize('sql.migration.successfully.migrated.to.azure.sql', "Successfully migrated to Azure SQL");
export const MIGRATION_NOT_STARTED = localize('sql.migration.migration.not.started', "Migration not started");
export const CHOOSE_TO_MIGRATE_TO_AZURE_SQL = localize('sql.migration.choose.to.migrate.to.azure.sql', "Choose to migrate to Azure SQL");
export const COMING_SOON = localize('sql.migration.coming.soon', "Coming soon");

// Azure APIs
export const EASTUS2EUAP = localize('sql.migration.eastus2euap', 'East US 2 EUAP');

//Migration cutover dialog
export const MIGRATION_CUTOVER = localize('sql.migration.cutover', "Migration cutover");
export const SOURCE_SERVER = localize('sql.migration.source.server', "Source server");
export const SOURCE_VERSION = localize('sql.migration.source.version', "Source version");
export const TARGET_SERVER = localize('sql.migration.target.server', "Target server");
export const TARGET_VERSION = localize('sql.migration.target.version', "Target version");
export const MIGRATION_STATUS = localize('sql.migration.migration.status', "Migration status");
export const FULL_BACKUP_FILES = localize('sql.migration.full.backup.files', "Full backup files");
export const LAST_APPLIED_LSN = localize('sql.migration.last.applied.lsn', "Last applied LSN");
export const LAST_APPLIED_BACKUP_FILES = localize('sql.migration.last.applied.backup.files', "Last applied backup files");
export const LAST_APPLIED_BACKUP_FILES_TAKEN_ON = localize('sql.migration.last.applied.files.taken.on', "Last applied backup files taken on");
export const ACTIVE_BACKUP_FILES = localize('sql.migration.active.backup.files', "Active Backup files");
export const STATUS = localize('sql.migration.status', "Status");
export const BACKUP_START_TIME = localize('sql.migration.backup.start.time', "Backup start time");
export const FIRST_LSN = localize('sql.migration.first.lsn', "First LSN");
export const LAST_LSN = localize('sql.migration.last.LSN', "Last LSN");
export const CANNOT_START_CUTOVER_ERROR = localize('sql.migration.cannot.start.cutover.error', "Cannot start the cutover process until all the migrations are done. Click refresh to fetch the latest file status");
export const AZURE_SQL_DATABASE_MANAGED_INSTANCE = localize('sql.migration.azure.sql.database.managed.instance', "Azure SQL Database Managed Instance");
export const AZURE_SQL_DATABASE_VIRTUAL_MACHINE = localize('sql.migration.azure.sql.database.virtual.machine', "Azure SQL Database Virtual Machine");
export const CANCEL_MIGRATION = localize('sql.migration.cancel.migration', "Cancel migration");
export function ACTIVE_BACKUP_FILES_ITEMS(fileCount: number) {
	if (fileCount === 1) {
		return localize('sql.migration.active.backup.files.items', "Active Backup files (1 item)");
	} else {
		return localize('sql.migration.active.backup.files.multiple.items', "Active Backup files ({0} items)", fileCount);
	}
}


//Migration status dialog
export const SEARCH_FOR_MIGRATIONS = localize('sql.migration.search.for.migration', "Search for migrations");
export const ONLINE = localize('sql.migration.online', "Online");
export const OFFLINE = localize('sql.migration.offline', "Offline");
export const DATABASE = localize('sql.migration.database', "Database");
export const TARGET_AZURE_SQL_INSTANCE_NAME = localize('sql.migration.target.azure.sql.instance.name', "Target Azure SQL Instance Name");
export const CUTOVER_TYPE = localize('sql.migration.cutover.type', "Cutover type");
export const START_TIME = localize('sql.migration.start.time', "Start Time");
export const FINISH_TIME = localize('sql.migration.finish.time', "Finish Time");
